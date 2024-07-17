import { TState, TLGA, TStateInfo, TUniversity, TAirport } from "./types";
import { NigeriaLocations } from "./data/nigeria-locations";

function findSingleState(stateID: string): TStateInfo | undefined {
  return NigeriaLocations.find((NigeriaLocation) => {
    return NigeriaLocation.state.id === stateID.toLowerCase();
  })?.state;
}

// FETCH ALL INFORMATION FROM ALL STATES
export function useAllStatesInfo(): TStateInfo[] {
  return NigeriaLocations.map((NigeriaLocation) => {
    return {
      ...NigeriaLocation.state,
    };
  });
}

// FETCH ALL INFORMATION FROM SINGLE STATE (LOCATION ID)
export function useStateInfo(stateID: string): TStateInfo | string {
  return findSingleState(stateID.toLowerCase()) ?? "Not Found!, Check the ID Passed.";
}

// FETCH ALL STATES
export function useAllStates(): TState[] {
  return NigeriaLocations.map((NigeriaLocation) => {
    return {
      name: NigeriaLocation.state.name,
      id: NigeriaLocation.state.id,
    };
  });
}

// FETCH SINGLE STATE (LOCATION ID)
export function useSingleState(stateID: string): TState | string {
  const singleState = findSingleState(stateID.toLowerCase());

  if (singleState) return { id: singleState.id, name: singleState.name };
  else {
    return "Not Found!, Check the ID Passed.";
  }
}

// FETCH CAPITAL OF SINGLE STATE (LOCATION ID)
export function useStateCapital(stateID: string): string {
  return findSingleState(stateID.toLowerCase())?.capital ?? "Not Found!, Check the ID Passed.";
}

// FETCH ALL LGAs IN SINGLE STATE (LOCATION ID)
export function useStateLGAs(stateID: string): TLGA[] | string {
  return findSingleState(stateID.toLowerCase())?.lgas ?? "Not Found!, Check the ID Passed.";
}

// FETCH SINGLE LGA (LOCATION ID)
export function useSingleLGA(stateID: string, LGAID: string): TLGA | string {
  return (
    findSingleState(stateID.toLowerCase())?.lgas.find((singleStateLgas) => {
      singleStateLgas.id === LGAID.toLowerCase();
    }) ?? "Not Found!, Check the ID Passed."
  );
}

// FETCH LAND MASS OF SINGLE STATE (LOCATION ID)
export function useStateLandMass(stateID: string): string {
  return findSingleState(stateID.toLowerCase())?.land_mass ?? "Not Found!, Check the ID Passed.";
}

// FETCH ALL UNIVERSITIES IN SINGLE STATE (LOCATION ID)
export function useStateUnis(stateID: string): TUniversity[] | string {
  return findSingleState(stateID.toLowerCase())?.universities ?? "Not Found!, Check the ID Passed.";
}

// FETCH ALL AIRPORTS IN SINGLE STATE (LOCATION ID)
export function useStateAirports(stateID: string): TAirport[] | string {
  return findSingleState(stateID.toLowerCase())?.airports ?? "Not Found!, Check the ID Passed.";
}

// FETCH GEO POLITCAL ZONE IN SINGLE STATE (LOCATION ID)
export function useStateGeoPoli(stateID: string): string {
  return findSingleState(stateID.toLowerCase())?.geopolitical_zone ?? "Not Found!, Check the ID Passed.";
}
