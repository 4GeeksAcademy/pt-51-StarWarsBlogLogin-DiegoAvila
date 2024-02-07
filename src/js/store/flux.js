const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			details: [],
			planets: [],
			vehicles: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			login: async (name, password) => {
				// console.log("Funciona");
				try{
					let response = await fetch("https://congenial-computing-machine-v6vjv6p7prvq2x9gw-3000.app.github.dev/user",{
						method: "POST",
						headers: {
							"Content-Type":"application/json"
						},
							body: JSON.stringify({
							"name": name,
							"password": password
						})
					})
					let data = await response.json()
					console.log(data);
						return true
				}catch(error){
					console.log(error);
					return false
				}

			},
			get_profile: async () => {
				let token = localStorage.getItem("token")
				try{
					let response = await fetch("https://congenial-computing-machine-v6vjv6p7prvq2x9gw-3000.app.github.dev/user",{
						method:"GET",
						headers:{
							"Content-Type":"application/json",
							"Authorization":`Bearer ${token}`,
						}
					})
				let data = await response.json()
				localStorage.setItem("token", data.access_token)	
				console.log(data);
					return true
				}catch(error){
					console.log(error);
					return false
				}
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getAllCharacters:()=>{
				fetch("https://www.swapi.tech/api/people")
				.then(res => res.json())
                .then(data => setStore({ characters: data.results }))
                .catch(err => console.error(err))
			},
			getAllDetails:()=>{
				fetch("https://www.swapi.tech/api/people/1")
				.then(res => res.json())
                .then(data => setStore({ details: data.results.properties }))
                .catch(err1 => console.error(err1))
			},
			getAllPlanets:()=>{
				fetch("https://www.swapi.tech/api/planets/")
				.then(res => res.json())
                .then(data => setStore({ planets: data.results }))
                .catch(err2 => console.error(err2))
			},
			getAllVehicles:()=>{
				fetch("https://www.swapi.tech/api/vehicles/")
				.then(res => res.json())
                .then(data => setStore({ vehicles: data.results }))
                .catch(err3 => console.error(err3))
			}
		}
	};
};

export default getState;
