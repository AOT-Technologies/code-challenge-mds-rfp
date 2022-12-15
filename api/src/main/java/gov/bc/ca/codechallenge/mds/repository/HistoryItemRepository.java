package gov.bc.ca.codechallenge.mds.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import gov.bc.ca.codechallenge.mds.model.HistoryItem;

public interface HistoryItemRepository extends JpaRepository<HistoryItem, Long> {

	List<HistoryItem> findAllByCommentId(long commentId);

}
