package com.nsetec.repository;

import java.util.List;

import com.nsetec.model.EmpVo;
import com.nsetec.model.PageVo;

public interface EmpDaoI {
	
	List<EmpVo> selectAllEmployee();
	
	int updateEmp(EmpVo empVo);
	
	int insertEmp(EmpVo empVo);
	
	int deleteEmp(EmpVo empVo);
	
	List<EmpVo> selectPagingEmployee(PageVo pageVo);
	
	int selectAllEmpCount();
	
}
