package com.nsetec.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nsetec.model.EmpVo;
import com.nsetec.model.PageVo;
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
	
	@RequestMapping(path = "updateEmp")
	public String updateEmp(EmpVo empVo, Model model) {
		
		logger.debug("empVo : {}", empVo);
		
		int update = empService.updateEmp(empVo);
		
		model.addAttribute("updateCnt", update);
		
		
		return "jsonView";
	}
	
	@RequestMapping(path = "insertEmp")
	public String insertEmp(EmpVo empVo, Model model) {
		
		logger.debug("empVo : {}", empVo);
		
		int insert = empService.insertEmp(empVo);
		
		model.addAttribute("insertCnt", insert);
		
		
		return "jsonView";
	}
	
	@RequestMapping(path = "deleteEmp")
	public String deleteEmp(EmpVo empVo, Model model) {
		
		logger.debug("empVo : {}", empVo);
		
		int delete = empService.deleteEmp(empVo);
		
		model.addAttribute("deleteCnt", delete);
		
		
		return "jsonView";
	}
	
	@RequestMapping(path = "selectPagingEmployee")
	public String selectPagingEmployee(PageVo pageVo, Model model) {
		
		logger.debug("접속");
		
		model.addAllAttributes(empService.selectPagingEmployee(pageVo));
		
		return "jsonView";
	}
	
}
