package gov.bc.ca.codechallenge.mds.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.bc.ca.codechallenge.mds.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>{

}
