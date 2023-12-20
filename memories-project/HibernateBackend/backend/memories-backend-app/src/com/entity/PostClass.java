package com.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="posts")
public class PostClass {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@Column(name="creator")
	private String creator;
	
	@Column(name="title")
	private String title;
	
	@Column(name="message")
	private String message;
	
	@Column(name="likes")
	private int likeCount;
	
	@Column(name="timeStamp")
	private String timeStamp;
	
	@Column(name="tags")
	private String tags;
	
	@Column(name="image")
	private String image;
	
	
	public PostClass(String creator, String title, String message, int likeCount, String timeStamp, String tags,
			String image) {
		super();
		this.creator = creator;
		this.title = title;
		this.message = message;
		this.likeCount = likeCount;
		this.timeStamp = timeStamp;
		this.tags = tags;
		this.image = image;
	}
	public PostClass(int id, String creator, String title, String message, int likeCount, String timeStamp, String tags,
			String image) {
		super();
		this.id = id;
		this.creator = creator;
		this.title = title;
		this.message = message;
		this.likeCount = likeCount;
		this.timeStamp = timeStamp;
		this.tags = tags;
		this.image = image;
	}
	public PostClass() {
		super();
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getCreator() {
		return creator;
	}
	public void setCreator(String creator) {
		this.creator = creator;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public int getLikeCount() {
		return likeCount;
	}
	public void setLikeCount(int likeCount) {
		this.likeCount = likeCount;
	}
	public String getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(String timeStamp) {
		this.timeStamp = timeStamp;
	}
	public String getTags() {
		return tags;
	}
	public void setTags(String tags) {
		this.tags = tags;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	@Override
	public String toString() {
		return "PostClass [id=" + id + ", creator=" + creator + ", title=" + title + ", message=" + message
				+ ", likeCount=" + likeCount + ", timeStamp=" + timeStamp + ", tags=" + tags + ", image=" + image + "]";
	}
	
	
}
