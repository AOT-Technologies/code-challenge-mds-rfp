package gov.bc.ca.codechallenge.mds.controller;

import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import gov.bc.ca.codechallenge.mds.model.HistoryItem;
import gov.bc.ca.codechallenge.mds.repository.HistoryItemRepository;

@RestController
@RequestMapping("/api/v1")
public class HistoryItemController {

	private static final Logger logger = LoggerFactory.getLogger(HistoryItemController.class);

	@Autowired
	private HistoryItemRepository historyItemRepository;

	@GetMapping("/history-item")
	public List<HistoryItem> getAllHistoryItem() {
		logger.debug("Getting all history items");
		List<HistoryItem> resp = historyItemRepository.findAll();
		logger.info("found " + resp.size() + " history items");
		return resp;
	}

	@GetMapping("/history-item/{commentId}")
	public List<HistoryItem> getAllByCommentId(@RequestParam(value = "commentId") Long commentId) {
		logger.debug("Getting all history items by comment Id: " + commentId);
		List<HistoryItem> resp = historyItemRepository.findAllByCommentId(commentId);
		logger.info("found " + resp.size() + " history items for the commentId: " + commentId);
		return resp;
	}

	@PostMapping("/history-item")
	public HistoryItem createHistoryItem(@Valid @RequestBody HistoryItem historyItem) {

		logger.debug("Creating new history item >> " + historyItem);
		HistoryItem createdHistoryItem = null;

		createdHistoryItem = historyItemRepository.save(historyItem);
		logger.info("History item created successfully.");

		return createdHistoryItem;

	}

}
