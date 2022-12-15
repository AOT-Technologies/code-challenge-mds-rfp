package gov.bc.ca.codechallenge.mds.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.bc.ca.codechallenge.mds.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>{
	
	List<Comment> findByApplicationId(long applicationId);

}
