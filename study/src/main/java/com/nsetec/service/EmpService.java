package com.nsetec.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.nsetec.model.EmpVo;
import com.nsetec.model.PageVo;
import com.nsetec.repository.EmpDao;

@Service("empService")
public class EmpService implements EmpServiceI{
	
	@Resource(name = "empDao")
	private EmpDao empDao;

	@Override
	public List<EmpVo> selectAllEmployee() {
		return empDao.selectAllEmployee();
	}

	@Override
	public int updateEmp(EmpVo empVo) {
		// TODO Auto-generated method stub
		return empDao.updateEmp(empVo);
	}

	@Override
	public int insertEmp(EmpVo empVo) {
		// TODO Auto-generated method stub
		return empDao.insertEmp(empVo);
	}

	@Override
	public int deleteEmp(EmpVo empVo) {
		// TODO Auto-generated method stub
		return empDao.deleteEmp(empVo);
	}

	@Override
	public Map<String, Object> selectPagingEmployee(PageVo pageVo) {
		Map<String, Object> map = new HashMap<String,Object>();
		
	
		
		//map.put("pageVo", vo);
		map.put("empList", empDao.selectPagingEmployee(pageVo));
		
		int empCnt = empDao.selectAllEmpCount();
		map.put("empCnt", empCnt);
		map.put("pagination", (int)Math.ceil((double)empCnt/pageVo.getPageSize()));
		
//		map.put("pagination", (int)Math.ceil((double)((int)map.get("userCnt"))/vo.getPageSize()));
		return map;
	}

}
