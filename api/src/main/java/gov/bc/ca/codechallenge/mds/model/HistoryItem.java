package gov.bc.ca.codechallenge.mds.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

@Entity
@JsonIgnoreProperties({ "hibernateLazyInitializer", "handler" })
@JsonInclude(Include.NON_NULL)
@Table(name = "history_items")
public class HistoryItem {

	private long id;
	private long commentId;
	private String text;
	private String type;
	private String author;
	private java.util.Date createdDateTime;
	private java.util.Date updatedDateTime;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Column(name = "comment_id", nullable = true)
	public long getCommentId() {
		return commentId;
	}

	public void setCommentId(long commentId) {
		this.commentId = commentId;
	}

	@Column(name = "text", nullable = true)
	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	@Column(name = "type", nullable = true)
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Column(name = "author", nullable = true)
	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	@CreationTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "created_datetime", nullable = false)
	public java.util.Date getCreatedDateTime() {
		return createdDateTime;
	}

	public void setCreatedDateTime(java.util.Date createdDateTime) {
		this.createdDateTime = createdDateTime;
	}

	@UpdateTimestamp
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_datetime", nullable = false)
	public java.util.Date getUpdatedDateTime() {
		return updatedDateTime;
	}

	public void setUpdatedDateTime(java.util.Date updatedDateTime) {
		this.updatedDateTime = updatedDateTime;
	}

}
