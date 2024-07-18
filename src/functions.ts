/**
 * @author Muiz Haruna devdesiignn <hmuiyze@gmail.com>
 */

import { TState, TLGA, TStateInfo, TUniversity, TAirport } from "./types";
import { NigeriaLocations } from "./data/nigeria-locations";

/**
 * @function findSingleState
 * Finds the location that matches the passed ID.
 *
 * @param {string} stateID - The location ID.
 * @returns {TStateInfo | undefined} - The matched location data.
 */
function findSingleState(stateID: string): TStateInfo | undefined {
  return NigeriaLocations.find((NigeriaLocation) => {
    return NigeriaLocation.state.id === stateID.toLowerCase();
  })?.state;
}

/**
 * @function useAllStatesInfo
 * Fetches all information from all states.
 *
 * @returns {TStateInfo[]} - An array of all locations data.
 */
export function useAllStatesInfo(): TStateInfo[] {
  return NigeriaLocations.map((NigeriaLocation) => {
    return {
      ...NigeriaLocation.state,
    };
  });
}

/**
 * @function useStateInfo
 * Fetches all information from single state.
 *
 * @param {string} stateID - The location ID.
 * @returns {TStateInfo | string} - The matched state data | Error Message.
 */
export function useStateInfo(stateID: string): TStateInfo | string {
  return findSingleState(stateID.toLowerCase()) ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useAllStates
 * Fetch all states.
 *
 * @returns {TState[]} - An array of all states data.
 */
export function useAllStates(): TState[] {
  return NigeriaLocations.map((NigeriaLocation) => {
    return {
      name: NigeriaLocation.state.name,
      id: NigeriaLocation.state.id,
    };
  });
}

/**
 * @function useSingleState
 * Fetches single state.
 *
 * @param {string} stateID - The location ID.
 * @returns {TState | string} - The matched state | Error Message.
 */
export function useSingleState(stateID: string): TState | string {
  const singleState = findSingleState(stateID.toLowerCase());

  if (singleState) return { id: singleState.id, name: singleState.name };
  else {
    return "Not Found!, Check the ID Passed.";
  }
}

/**
 * @function useStateCapital
 * Fetches capital of state.
 *
 * @param {string} stateID - The location ID.
 * @returns {string} Capital of a single state.
 */
export function useStateCapital(stateID: string): string {
  return findSingleState(stateID.toLowerCase())?.capital ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateLGAs
 * Fetches all Lgas in state.
 *
 * @param {string} stateID - The location ID.
 * @returns {TLGA[] | string} - An array of all Lgas in matched state | Error Message.
 */
export function useStateLGAs(stateID: string): TLGA[] | string {
  return findSingleState(stateID.toLowerCase())?.lgas ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useSingleLGA
 * Fetches single Lga.
 *
 * @param {string} stateID - The location ID.
 * @returns {TLGA | string} - The matched LGA | Error Message.
 */
export function useSingleLGA(stateID: string, LGAID: string): TLGA | string {
  return (
    findSingleState(stateID.toLowerCase())?.lgas.find((singleStateLgas) => {
      singleStateLgas.id === LGAID.toLowerCase();
    }) ?? "Not Found!, Check the IDs Passed."
  );
}

/**
 * @function useStateLandMass
 * Fetches Land mass of state.
 *
 * @param {string} stateID - The location ID.
 * @returns {string} Land Mass of a single state | Error Message.
 */
export function useStateLandMass(stateID: string): string {
  return findSingleState(stateID.toLowerCase())?.land_mass ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateUnis
 * Fetches All Universities in state.
 *
 * @param {string} stateID - The location ID.
 * @returns {TUniversity[] | string} An array of all Universities in state | Error Message.
 */
export function useStateUnis(stateID: string): TUniversity[] | string {
  return findSingleState(stateID.toLowerCase())?.universities ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateAirports
 * Fetches All Airports in state.
 *
 * @param {string} stateID - The location ID.
 * @returns {TAirport[] | string}  An array of all Airports in state | Error Message.
 */
export function useStateAirports(stateID: string): TAirport[] | string {
  return findSingleState(stateID.toLowerCase())?.airports ?? "Not Found!, Check the ID Passed.";
}

/**
 * @function useStateGeoPoli
 * Fetches Geo Political Zone of state.
 *
 * @param {string} stateID - The location ID.
 * @returns {string} Geo Political Zone of a single state | Error Message.
 */
export function useStateGeoPoli(stateID: string): string {
  return findSingleState(stateID.toLowerCase())?.geopolitical_zone ?? "Not Found!, Check the ID Passed.";
}
