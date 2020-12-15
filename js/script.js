const app = new Vue(
	{

		el: "#wrapper",
		data: {
			contacts: [
				{
					name: 'Snoop',
					avatar: 'img/avatar_1.jpg',
					altAvatar: "avatar 1",
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Hai portato a spasso il cane?',
							status: 'sent',
							activeClass: false
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Ricordati di dargli da mangiare',
							status: 'sent',
							activeClass: false
						},
						{
							date: '10/01/2020 16:15:22',
							text: 'Tutto fatto!',
							status: 'received',
							activeClass: false
						}
					],
				},
				{
					name: 'Billy',
					avatar: 'img/avatar_2.jpg',
					altAvatar: "avatar 2",
					visible: true,
					messages: [
						{
							date: '20/03/2020 16:30:00',
							text: 'Ciao come stai?',
							status: 'sent',
							activeClass: false
						},
						{
							date: '20/03/2020 16:30:55',
							text: 'Bene grazie! Stasera ci vediamo?',
							status: 'received',
							activeClass: false
						},
						{
							date: '20/03/2020 16:35:00',
							text: 'Mi piacerebbe ma devo andare a fare la spesa.',
							status: 'sent',
							activeClass: false
						}
					],
				},
				{
					name: 'Chuck',
					avatar: 'img/avatar_3.jpg',
					altAvatar: "avatar 3",
					visible: true,
					messages: [
						{
							date: '28/03/2020 10:10:40',
							text: 'La Marianna va in campagna',
							status: 'received',
							activeClass: false
						},
						{
							date: '28/03/2020 10:20:10',
							text: 'Sicuro di non aver sbagliato chat?',
							status: 'sent',
							activeClass: false
						},
						{
							date: '28/03/2020 16:15:22',
							text: 'Ah scusa!',
							status: 'received',
							activeClass: false
						}
					],
				},
				{
					name: 'Emily',
					avatar: 'img/avatar_4.jpg',
					altAvatar: "avatar 4",
					visible: true,
					messages: [
						{
							date: '10/01/2020 15:30:55',
							text: 'Lo sai che ha aperto una nuova pizzeria?',
							status: 'sent',
							activeClass: false
						},
						{
							date: '10/01/2020 15:50:00',
							text: 'Si, ma preferirei andare al cinema',
							status: 'received',
							activeClass: false
						}
					],
				},
			],
			activeIndex: 0,
			currentDate: "",
			userSearchInput: "",
			userMessageInput: "",
		},
		methods: {

			contactSelector: function (index) {
				this.activeIndex = index;
			}, // fine funzione

			sendMessage: function() {
				// entro nell'array dei messaggi dell'utente in cui clicco
				let contactMessageArchive = this.contacts[this.activeIndex].messages;

				var newSendMessage = {
					date: dayjs().format('DD/MM/YYYY H:mm:ss'),
					text: this.userMessageInput,
					status: 'sent',
					activeClass: false
				}
				contactMessageArchive.push(newSendMessage);
				this.userMessageInput = "";

				// dopo un secondo ritorno un messaggio automatico con scritto Ok!
				setTimeout(
					() => {

						var newReceivedMessage = {
							date: dayjs().format('DD/MM/YYYY H:mm:ss'),
							text: "Ok!",
							status: 'received',
							activeClass: false
						}
						contactMessageArchive.push(newReceivedMessage);

					}, 1000);
					// console.log(contactMessageArchive);

			}, // fine funzione

			searchContact: function() {
				this.contacts.forEach(
					(element) => {
						element.visible = false;
						if (element.name.includes(this.userSearchInput)) {
							element.visible = true;
						}
					}
				);
			}, // fine funzione

			toggleActiveClass: function (index) {

				let contactMessageArchive = this.contacts[this.activeIndex].messages;
				let target = this.contacts[this.activeIndex].messages[index];

				contactMessageArchive.forEach(
					(element) => {
						if (target != element) {
							element.activeClass = false;
						}
					}
				);

				if (target.activeClass == false) {
					target.activeClass = true;
				} else {
					target.activeClass = false;
				}
			}, // fine funzione

			deleteMessage: function (index) {
				let contactMessageArchive = this.contacts[this.activeIndex].messages;
				contactMessageArchive.splice(index, 1);
			}

		} // fine di methods

	}
);
