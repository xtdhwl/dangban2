package net.shenru.dangban.servlet;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
import net.shenru.dangban.util.MyJson;

/**
 * web服务
 * 
 * @author xtdhwl
 *
 */
public class WebServlet extends HttpServlet {

	
	/**
	 * funCode: 100001 sql : select * from Data where moble=130000000 and funCode = 100001
	 */
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		ServletInputStream is = req.getInputStream();
		ByteArrayOutputStream baos = new ByteArrayOutputStream();
		byte[] buf = new byte[1024];
		int len = -1;
		while ((len = is.read(buf)) > 0) {
			baos.write(buf, 0, len);
		}
		String body = new String(baos.toByteArray(), "utf-8");
		Map<String,Object> map = MyJson.fromJson(body, Map.class);
		String funCode = (String) map.get("funCode");
		 
		if("100001".equals(funCode)){
			//web
			String sql = (String) map.get("sql");
		}

	}
}
