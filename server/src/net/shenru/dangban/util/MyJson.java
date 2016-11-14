package net.shenru.dangban.util;

import com.google.gson.Gson; 

public class MyJson {

	static Gson gson = new Gson();
	
	public static<T> T fromJson(String json, Class<T> clazz){
		return  gson.fromJson(json, clazz);
	}
	
	public static String toString(Object obj){
		return gson.toJson(obj);
	}

	 
}
