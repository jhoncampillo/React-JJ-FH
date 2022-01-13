//Importo libreria opara que fucniones ls metodo de expect como por ejempo
//PrimeraApp     expect(getByText(saludo)).toBeInDocuement();
//import "@testing-library/jest-dom/extend-expect";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
//importo la instalacion del enzyme-to-json para hacer los snapshop
import { createSerializer } from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
//se usa para los snapshot
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));
