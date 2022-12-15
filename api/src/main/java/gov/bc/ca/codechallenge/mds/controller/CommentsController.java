package gov.bc.ca.codechallenge.mds.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import gov.bc.ca.codechallenge.mds.model.Comment;


@RestController
@RequestMapping("/api/v1")
public class CommentsController {

	private static final Logger logger = LoggerFactory.getLogger(CommentsController.class);
	
	@GetMapping("/comment")
	public List<Comment> getAllComments() {
		return null;
	}
	
	@GetMapping("/comment/{id}")
	public Comment getCommentById(@PathVariable(value = "id") Long commentId){
		return null;
	}
	
	@PostMapping("/comment")
	public Comment createApplication(@Valid @RequestBody Comment comment) {
		
		return null;
		
	}
	
	@GetMapping("/comment/{id}")
	public Comment updateApplication(@PathVariable(value = "id") Long commentId,
			@Valid @RequestBody Comment comment)  {
		return null;
		
	}
}
