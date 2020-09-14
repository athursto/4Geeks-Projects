const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite: (item, index, category) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, { name: item, index: index, category: category }] });
			},
			handleDelete: indextodelete => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter((item, index) => indextodelete != index)
				});
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getPlanets: () => {
				fetch("https://swapi.dev/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }));
			},
			getPeople: () => {
				fetch("https://swapi.dev/api/people/")
					.then(res => res.json())
					.then(data => setStore({ people: data.results }));
			},
			getPerson: (data, id) => {
				fetch(`https://swapi.dev/api/people/${id}`)
					.then(res => res.json())
					.then(data => setStore({ people: data.results }));
				//making a new fetch in case the person's ID needs to be in the fetch?
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
			}
		}
	};
};

export default getState;
