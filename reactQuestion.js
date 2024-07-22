// 1.
const Users = [
	{
		firstName: "John",
		lastName: "Doe",
		customerID: "123",
		note: "",
		profession: "freelancer",
	},
	{
		firstName: "Jane",
		lastName: "Smith",
		customerID: "124",
		note: "",
		profession: "productOwner",
	},
	{
		firstName: "Alice",
		lastName: "Brown",
		customerID: "123",
		note: "",
		profession: "engineer",
	},
	{
		firstName: "Bob",
		lastName: "Johnson",
		customerID: "125",
		note: "",
		profession: "student",
	},
	{
		firstName: "Bob",
		lastName: "Brown",
		customerID: "126",
		note: "",
		profession: "systemAnalytics",
	},
];

//Q1

const sortUserName = (users) => {
	return users.sort((a, b) => {
		const aStr = a.firstName + a.lastName + a.customerID;
		const bStr = b.firstName + b.lastName + b.customerID;

		if (aStr < bStr) {
			return -1;
		}
		if (aStr > bStr) {
			return 1;
		}
		return 0;
	});
};

// console.log(sortUserName(Users));

//Q2

const sortByType = (users) => {
	const professionOrder = {
		systemAnalytics: 1,
		engineer: 2,
		productOwner: 3,
		freelancer: 4,
		student: 5,
	};

	return users.sort((a, b) => {
		return professionOrder[a.profession] - professionOrder[b.profession];
	});
};

// console.log(sortByType(Users));

//2.

//為何.container .shop-list .item selector 沒有生效的原因是因為前一行有一個更高級的selector li.item 因此會先使用這個選擇器
//.container .shop-list:first-child .item { color: blud;} 讓第一個shop list改為藍色
//.container .shop-list li.item:nth-child(odd) { backgroundColor: 'pink'; } 讓list item間隔底色

//3.

let items = [
	1, 1, 1, 5, 2, 3, 4, 3, 3, 3, 3, 3, 3, 7, 8, 5, 4, 9, 0, 1, 3, 2, 6, 7, 5,
	4, 4, 7, 8, 8, 0, 1, 2, 3, 1,
];

const getUniqueNumber = (items) => {
	const uniqueNumber = new Set(items);
	console.log([...uniqueNumber]);
};

getUniqueNumber(items);

//4.
// Interface 用於typescript 在宣告變數時給訂一個型別，以便利日後程式碼維護，以及在調用函示時可以減少傳錯型別參數或是回傳的型別
// Enum 用於固定的參數，像是前面的profession 在一些不易改變的變數上給予其對應的id或是任何編號，方便引用

// example 第一題的users 的object可以先用interface來定義型別
enum Profession {
    Student = 'Student',
    Freelancer = 'Freelancer',
    ProductOwner = 'ProductOwner',
    Engineer = 'Engineer',
    SystemAnalyst = 'SystemAnalyst'
  }

interface User {
	firstName: string;
	lastName: string;
	customerID: number;
	profession: Profession;
}

const users: User[] = [
    { firstName: 'John', lastName: 'Doe', customerID: '123', profession: Profession.Freelancer },
    { firstName: 'Jane', lastName: 'Smith', customerID: '124', profession: Profession.Engineer },
    { firstName: 'Alice', lastName: 'Johnson', customerID: '123', profession: Profession.Student },
    { firstName: 'Bob', lastName: 'Brown', customerID: '125', profession: Profession.SystemAnalyst }
  ];

//5.
// 在handleaddCount() 中調用了三次setState，且是直接使用當前this.state.count來改變，由於setState非同步的性質，
// 這三個this.state.count會是同一個數值，所以無法達到即時的變化。須使用updater函式。

handleAddCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };


// 6

function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

class SearchBox extends React.Component {
constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.debouncedHandleOnChange = debounce(this.handleOnChange, 300);
}

handleOnChange(event) {
    // make ajax call
}

render() {
    return (
    <input
        type="search"
        name="p"
        onChange={this.debouncedHandleOnChange}
    />
    );
}
}

  

