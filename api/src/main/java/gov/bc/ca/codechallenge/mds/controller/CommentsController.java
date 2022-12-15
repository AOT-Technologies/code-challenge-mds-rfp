package gov.bc.ca.codechallenge.mds.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gov.bc.ca.codechallenge.mds.exception.ResourceNotFoundException;
import gov.bc.ca.codechallenge.mds.model.Comment;
import gov.bc.ca.codechallenge.mds.repository.CommentRepository;


@RestController
@RequestMapping("/api/v1")
public class CommentsController {

	private static final Logger logger = LoggerFactory.getLogger(CommentsController.class);
	
	@Autowired
	private CommentRepository commentRepository;
	
	@GetMapping("/comment")
	public List<Comment> getAllComments() {
		logger.info("Returning all the comments");
		List<Comment> comments = commentRepository.findAll();

		return comments;
	}
	
	@GetMapping("/comment/{id}")
	public Comment getCommentById(@PathVariable(value = "id") Long commentId)throws ResourceNotFoundException {
		logger.debug("Querying db for commentId: " + commentId);
		Comment comment = commentRepository.findById(commentId).orElseThrow(() -> {
			logger.error("Comment not found for commentId: " + commentId);
			return new ResourceNotFoundException("Comment not found for this id :: " + commentId);
		});

		logger.info("Returning Application for commentId: " + commentId);
		
		return comment;
	}
	
	@PostMapping("/comment")
	public Comment createComment(@Valid @RequestBody Comment comment) {
		
		logger.debug("Creating new comment >> "+comment);
		Comment createdComment = null;
		
		createdComment = commentRepository.save(comment);
		logger.info("createdComment created successfully.");
		
		return createdComment;
		
	}
	
	@PutMapping("/comment/{id}")
	public Comment updateCommentStatus(@PathVariable(value = "id") Long commentId,
			@Valid @RequestBody Comment commentReq) throws ResourceNotFoundException  {
		logger.debug("Querying db for commentId: " + commentId);
		Comment comment = commentRepository.findById(commentId).orElseThrow(() -> {
			logger.error("Comment not found for commentId: " + commentId);
			return new ResourceNotFoundException("Application not found for this id :: " + commentId);
		});

		comment.setStatus(commentReq.getStatus());
		final Comment updatedComment = commentRepository.save(comment);
		
		logger.info("Comment status updated for commentId: " + commentId);
		return updatedComment;
	}
}
