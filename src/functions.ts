import { TLocation } from "./types";
import { NigeriaLocations } from "./data/nigeria-locations";

// FETCH ALL LOCATIONS
export function useAllStates(): TLocation[] {
  return NigeriaLocations;
}

// FETCH SINGLE LOCATION BY NAME OR ID
export function useSingleState(stateID: string): TLocation | string {
  const singleState = NigeriaLocations.find((NigeriaLocation) => {
    return NigeriaLocation.state.id === stateID;
  });

  if (singleState) return singleState;
  else {
    return "State Not Found!";
  }
}
