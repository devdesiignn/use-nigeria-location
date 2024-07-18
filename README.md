# use-nigeria-location

> Custom hooks that provides you the list of all States, LGAs, Airports, Universities, Land mass, Geo-Political zones in Nigeria.

Follow this project's author, [Muiz Haruna](https://github.com/devdesiignn/), and give the project a star ⭐ to show your appreciation and recommend to your friends.

## Install

Install with [npm](https://www.npmjs.com/)

```sh
npm install use-nigeria-location
```

## Usage

### Fetch all information from all states

```js
import { useAllStatesInfo } from "use-nigeria-location";

console.log(useAllStatesInfo())
/* => 
[{
  name: "Abia",
  capital: "Umuahia",
  id: "2e14a7ed-349a-44f6-9e12-abfec3e5f6ed",
  lgas: [
  { name: "Aba South", id: "4c840cb1-8f58-40d3-9aff-5a3b77fdba71" },

  ... ],
  land_mass: "6,320 km²",
  universities: 
  [
    {
      name: "Abia State University",
      location: "Uturu",
      type: "State",
    },

  ... ],
  airports: [],
  geopolitical_zone: "South East",
}, 

... ]
*/
```

### Fetch all information from single state

```js
import { useStateInfo } from "use-nigeria-location";

// takes state ID parameter

console.log(useStateInfo("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed"))
/* => 
{
  name: "Abia",
  capital: "Umuahia",
  id: "2e14a7ed-349a-44f6-9e12-abfec3e5f6ed",
  lgas: 
  [
  { name: "Aba South", id: "4c840cb1-8f58-40d3-9aff-5a3b77fdba71" },
  ...
  ],
  land_mass: "6,320 km²",
  universities: 
  [
  { name: "Abia State University",
    location: "Uturu",
    type: "State",
  },
  ...
  ],
  airports: [],
  geopolitical_zone: "South East",
}
*/
```

### Fetch all states

```js
import { useAllStates } from "use-nigeria-location";

console.log(useAllStates())
/* => 
[ 
  { name: "Abia", id: "2e14a7ed-349a-44f6-9e12-abfec3e5f6ed" },
  { name: "Adamawa", id: "3ac495b8-4196-4126-bf9e-bb8d43a0355d" },
  { name: "Akwa Ibom", id: "b6ed5429-7677-4aad-bf2a-97ce4f211494" },

... ]
*/
```

### Fetch single state

```js
import { useSingleState } from "use-nigeria-location";

// takes state ID parameter

console.log(useSingleState("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed"))
// => { name: "Abia", id: "2e14a7ed-349a-44f6-9e12-abfec3e5f6ed" }
```

### Fetch capital of single state

```js
import { useStateCapital } from "use-nigeria-location";

// takes state ID parameter

console.log(useStateCapital("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed")) 
// => "Umuahia"
```

### Fetch all lgas from single state

```js
import { useStateLGAs } from "use-nigeria-location";

// takes state ID parameter
console.log(useStateLGAs("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed"))
/* => 
[
  { name: "Aba South", id: "4c840cb1-8f58-40d3-9aff-5a3b77fdba71" },
  { name: "Arochukwu", id: "f46f5f01-43e1-440c-84a5-72382d0e6b94" },
  { name: "Bende", id: "836932e0-0aa7-4f7c-a3ef-44b5d30775c4" },

  ...
]
*/
```

### Fetch single lga in single state

```js
import { useSingleLGA } from "use-nigeria-location";

// takes state ID parameter and LGA ID parameter
console.log(useSingleLGA("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed", "4c840cb1-8f58-40d3-9aff-5a3b77fdba71"))
// => { name: "Aba South", id: "4c840cb1-8f58-40d3-9aff-5a3b77fdba71" }
```

### Fetch land mass of single state

```js
import { useStateLandMass } from "use-nigeria-location";

// takes state ID parameter

console.log(useStateLandMass("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed")) 
// => "6,320 km²"
```

### Fetch all universities in single state

```js
import { useStateUnis } from "use-nigeria-location";

// takes state ID parameter

console.log(useStateUnis("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed")) 
/* => 
[
  { 
  name: "Abia State University",
  location: "Uturu",
  type: "State",
  },
  {
  name: "Michael Okpara University of Agriculture",
  location: "Umudike",
  type: "Federal",
  },
]
*/
```

### Fetch all airports in single state

```js
import { useStateAirports } from "use-nigeria-location";

// takes state ID parameter

console.log(useStateAirports("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed")) 
// => []
```

### Fetch geo-political zone of single state

```js
import { useStateGeoPoli } from "use-nigeria-location";

// takes state ID parameter

console.log(useStateGeoPoli("2e14a7ed-349a-44f6-9e12-abfec3e5f6ed")) 
// => "South East"
```

## Author

### Muiz Haruna or DEVDESIIGNN

#### **Connect with me:**

[![Twitter: @dev_desiignn](https://img.shields.io/badge/twitter-1D9BF0?style=for-the-badge&logo=X&logoColor=white)](https://twitter.com/dev_desiignn) [![Facebook: @devdesiignnn](https://img.shields.io/badge/facebook-0866FF?style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/devdesiignnn) [![LinkedIn: @devdesiignn](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devdesiignn/)

## License

Copyright © 2024 [Muiz Haruna](https://github.com/devdesiignn/).

This project is licensed under the MIT License.

Thank you for using this package. 🔥 && 🧊
