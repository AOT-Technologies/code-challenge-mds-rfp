package gov.bc.ca.codechallenge.mds.controller;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.hamcrest.core.Is.is;
import static org.mockito.BDDMockito.given;
import static java.util.Collections.singletonList;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import gov.bc.ca.codechallenge.mds.model.HistoryItem;

@RunWith(SpringRunner.class)
@WebMvcTest(HistoryItemController.class)
public class HistoryItemControllerTest {

	@Autowired
	private MockMvc mvc;

	@MockBean
	private HistoryItemController historyItemController;

	@Test
	public void getAllHistoryItem() throws Exception {

		HistoryItem historyItem = new HistoryItem();
		historyItem.setAuthor("Steve Job");
		historyItem.setType("Response");
		List allHistoryItems = singletonList(historyItem);

		given(historyItemController.getAllHistoryItem())
				.willReturn(ResponseEntity.ok().contentType(MediaType.APPLICATION_JSON).body(allHistoryItems));

		mvc.perform(get("/api/v1/history-item").contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk())
				.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
				.andExpect(jsonPath("$.[0].author", is("Steve Job")))
				.andExpect(jsonPath("$.[0].type", is("Response")));

	}

}
