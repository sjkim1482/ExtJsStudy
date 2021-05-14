package com.nsetec.service;

import java.util.List;
import java.util.Map;

import com.nsetec.model.EmpVo;
import com.nsetec.model.PageVo;

public interface EmpServiceI {
	
	List<EmpVo> selectAllEmployee();
	
	int updateEmp(EmpVo empVo);
	
	int insertEmp(EmpVo empVo);
	
	int deleteEmp(EmpVo empVo);
	
	Map<String, Object> selectPagingEmployee(PageVo pageVo);
	
}
