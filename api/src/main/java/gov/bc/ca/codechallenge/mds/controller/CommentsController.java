package gov.bc.ca.codechallenge.mds.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1")
public class CommentsController {

	private static final Logger logger = LoggerFactory.getLogger(CommentsController.class);
}
