package com.nsetec.repository;

import java.util.List;

import com.nsetec.model.EmpVo;

public interface EmpDaoI {
	
	List<EmpVo> selectAllEmployee();
	
}
