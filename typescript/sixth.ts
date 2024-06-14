type employee = {
    name: string;
    department: string;
};
type player = {
    team:string;
}
type combinedType = employee & player
const sachin: combinedType = {
    name : "Sachin",
    department : "IT",
    team : "Angular"
}
console.log(sachin);
console.log(sachin.name);
console.log(sachin.team);
