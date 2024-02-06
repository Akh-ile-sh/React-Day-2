import "./App.css";
import DisplayCard from "./components/Displaycard";

const data = [
  {
    plan: "FREE",
    price: "$0/month",
    user: "single",
    storage: "50GB",
    publicProjects: "unlimited",
    access: "community",
    privateProjects: "unlimited",
    phoneSupport: "dedicated",
    subdomain: "free",
    reports: "Monthly status reports",
  },
  {
    plan: "PLUS",
    price: "$9/month",
    user: "single",
    storage: "50GB",
    publicProjects: "unlimited",
    access: "community",
    privateProjects: "unlimited",
    phoneSupport: "dedicated",
    subdomain: "free",
    reports: "Monthly status reports",
  },
  {
    plan: "PRO",
    price: "$49/month",
    user: "single",
    storage: "50GB",
    publicProjects: "unlimited",
    access: "community",
    privateProjects: "unlimited",
    phoneSupport: "dedicated",
    subdomain: "free",
    reports: "Monthly status reports",
  },
];

function App() {
  const priceTag = data;
  const attr = priceTag.plan != "PRO" ? "disabled" : "btn";
  return (
    <div className="App">
      <div className="container bg-primary">
        <div className="row">
          {priceTag.map((datas, index) => (
            <DisplayCard key={index} att={attr} data={datas} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
