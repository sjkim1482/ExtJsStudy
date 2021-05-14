package com.nsetec.repository;


import java.util.List;

import javax.annotation.Resource;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Repository;

import com.nsetec.model.EmpVo;
import com.nsetec.model.PageVo;

@Repository("empDao")
public class EmpDao implements EmpDaoI{

	@Resource(name = "sqlSessionTemplate")
	private SqlSessionTemplate template;
	
	@Override
	public List<EmpVo> selectAllEmployee() {
		return template.selectList("emp.selectAllEmployee");
	}

	@Override
	public int updateEmp(EmpVo empVo) {
		// TODO Auto-generated method stub
		return template.update("emp.updateEmp",empVo);
	}

	@Override
	public int insertEmp(EmpVo empVo) {
		// TODO Auto-generated method stub
		return template.update("emp.insertEmp",empVo);
	}

	@Override
	public int deleteEmp(EmpVo empVo) {
		// TODO Auto-generated method stub
		return template.update("emp.deleteEmp",empVo);
	}

	@Override
	public List<EmpVo> selectPagingEmployee(PageVo pageVo) {
		// TODO Auto-generated method stub
		return template.selectList("emp.selectPagingEmployee", pageVo);
	}

	@Override
	public int selectAllEmpCount() {
		// TODO Auto-generated method stub
		return template.selectOne("emp.selectAllEmpCount");
	}
	
}
