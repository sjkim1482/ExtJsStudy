package com.nsetec.repository;


import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.nsetec.model.EmpVo;

@Repository("empDao")
public class EmpDao implements EmpDaoI{

	@Resource(name = "sqlSessionTemplate")
	private SqlSessionTemplate template;
	
	@Override
	public List<EmpVo> selectAllEmployee() {
		return template.selectList("emp.selectAllEmployee");
	}
	
}
