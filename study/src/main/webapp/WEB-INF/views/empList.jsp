<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<table border="1">
		<tr>
			<th>사번</th>
			<th>이름</th>
			<th>직책</th>
			<th>급여</th>
			<th>입사일자</th>
		</tr>
		<c:forEach items="${empList}" var="emp">
			<tr>
				<td>${emp.empno}</td>
				<td>${emp.ename}</td>
				<td>${emp.job}</td>
				<td>${emp.sal}</td>
				<td>${emp.hiredate}</td>
			</tr>
		</c:forEach>
	
	</table>

</body>
</html>