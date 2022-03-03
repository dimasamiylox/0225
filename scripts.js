// загрузка данных с сервера
function loadStudents() {
	$.get('http://217.71.129.139:4072/api/students.php', function(data){
		let students = JSON.parse(data)['students'];
		showTable(students)
	});
}

// отрасли табицы
function showTable(students){
	let table = $('#tbl_all>tbody')
	for (let i = 0; i < students.length; i++) {
		// создадим новую строку
		let tr = $('<tr></tr>')
		// создадим 5 ячеек и кнопку
		let td1 = $('<td>' + students[i].id + '</td>')
		let td2 = $('<td>' + students[i].name + '</td>')
		let td3 = $('<td>' + students[i].surname + '</td>')
		let td4 = $('<td>' + students[i].group + '</td>')
		let td5 = $('<td></td>')
		let td6 = $('<td>' + students[i].LOGO + '</td')
		let btn = $('<button>Подробно</button>')
		btn.click(function() {
			showInfo(students[i])
		})

		td5.append(btn)
		// прикрепим ячейки к строке
		tr.append(td1).append(td2).append(td3).append(td4).append(td5)

		// приврепим ячейки к строке
		table.append(tr)
	}
}

function showInfo(student) { 
	let div = $('#info')
	div.html('')

	let head = $('<h1>Информация о студенте № '+student.id+'</h1>')
	let name = $('<h3>'+student.name+' '+student.surname+'</h3>')
	let group = $('<h3>Группа: '+student.group+'</h3>')
	let LOGO = $('<img src=http://217.71.129.139:4072/api/'+student.LOGO+' width="190" >')

	div.append(head).append(name).append(group).append(LOGO)
}
