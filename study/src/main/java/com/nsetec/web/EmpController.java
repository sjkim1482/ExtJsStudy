package com.nsetec.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nsetec.service.EmpService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Controller
@RequestMapping("emp")
public class EmpController {

	private static final Logger logger = LoggerFactory.getLogger(EmpController.class);
	
	@Resource(name="empService")
	private EmpService empService;
	
	@RequestMapping(path = "selectEmpList")
	public String selectEmpList(Model model) {
		
		logger.debug("접속");
		
		model.addAttribute("empList", empService.selectAllEmployee());
		
		return "jsonView";
	}
	
}
