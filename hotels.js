// function checkRooms() {

// 	setTimeout(function(){
// 		console.log('Проверяем наличие мест')
// 		const avaliableRooms = true

// 		setTimeout(function(){
// 			if (avaliableRooms) {
// 				console.log('Номера есть, едем в отпуск')
// 			} else {
// 				console.log('Номеров нет, отпуск отменяется')
// 			}
// 		}, 1000)
// 	}, 1000)
// }

// checkRooms()

const checkRooms = new Promise(function(resolve, reject){
	setTimeout(function(){
		console.log('Проверяем наличие номеров')
		const avaliableRooms = true

		if (avaliableRooms) {
			resolve('Номера есть')
		} else {
			reject('Номеров нет')
		}
	})
})

//цепочка промисов с отдельными функциями
checkRooms.then(checkTikets).then(success).catch(failed)

	function checkTikets(data){
		return new Promise(function(resolve, reject){
			setTimeout(() =>{
				console.log('Ответ на предыдущем шаге:', data)
				console.log('Проверяем наличие билеты')
				const avaliableTickets = true
	
				if (avaliableTickets) {
					let message = 'Билеты есть'
					resolve(message)
				} else {
					let message = 'Билетов нет'
					reject(message)
				}
			}, 1000)
		})
	}
	
	function success(data){
		console.log('Ответ на предыдущем шаге:', data)
		console.log('Едем в отпуск')
	}
	
	function failed(data){
		console.log('Ответ на предыдущем шаге:', data)
		console.log('Отпуск отменяется')
	}

// цепочка промисов
// checkRooms.then(function(data){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(() =>{
// 			console.log('Ответ на предыдущем шаге:', data)
// 			console.log('Проверяем наличие билеты')
// 			const avaliableTickets = true

// 			if (avaliableTickets) {
// 				let message = 'Билеты есть'
// 				resolve(message)
// 			} else {
// 				let message = 'Билетов нет'
// 				reject(message)
// 			}
// 		}, 1000)
// 	})

// }).then(function(data){
// 	console.log('Ответ на предыдущем шаге:', data)
// 	console.log('Едем в отпуск')

// }).catch(function(data){
// 	console.log('Ответ на предыдущем шаге:', data)
// 	console.log('Отпуск отменяется')
// })

// checkRooms.then(function(data){
// 	console.log('Номера есть, едем в отпуск')
// }).catch(function(data){
// 	console.log('Номеров нет, отпуск отменяется')
// })


