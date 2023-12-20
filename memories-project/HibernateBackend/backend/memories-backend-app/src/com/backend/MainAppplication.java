package com.backend;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import com.entity.PostClass;


public class MainAppplication {
	public static void main(String[] args) {
		SessionFactory sf = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(PostClass.class).buildSessionFactory();
		
		Session s = sf.getCurrentSession();
		
		s.beginTransaction();
		
		List<PostClass> post = s.createQuery("from PostClass").list();
		
		System.out.println("Posts:-"+post);
		
	}
}
