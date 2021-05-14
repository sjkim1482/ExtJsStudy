package com.nsetec.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nsetec.model.EmpVo;
import com.nsetec.repository.EmpDao;

@Service("empService")
public class EmpService implements EmpServiceI{
	
	@Resource(name = "empDao")
	private EmpDao empDao;

	@Override
	public List<EmpVo> selectAllEmployee() {
		return empDao.selectAllEmployee();
	}

}