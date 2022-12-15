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

	@GetMapping("/history-item/{id}")
	public HistoryItem getHistoryItemById(@PathVariable(value = "id") Long historyItemId) {
		return null;
	}

	@PostMapping("/history-item")
	public HistoryItem createHistoryItem(@Valid @RequestBody HistoryItem historyItem) {

		logger.debug("Creating new history item >> " + historyItem);
		HistoryItem createdHistoryItem = null;

		createdHistoryItem = historyItemRepository.save(historyItem);
		logger.info("History item created successfully.");

		return createdHistoryItem;

	}

	@PutMapping("/history-item/{id}")
	public HistoryItem updateHistoryItem(@PathVariable(value = "id") Long historyItemId,
			@Valid @RequestBody HistoryItem historyItem) {
		return null;

	}
}
