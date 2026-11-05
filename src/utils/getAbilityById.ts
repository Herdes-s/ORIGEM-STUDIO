import { abilitiesData } from "../data/abilitiesData";

export function getAbilityById(id: string) {
  return (
    abilitiesData.active.find((ability) => ability.id === id) ??
    abilitiesData.passive.find((ability) => ability.id === id) ??
    abilitiesData.buffs.find((effect) => effect.id === id) ??
    abilitiesData.debuffs.find((effect) => effect.id === id) ??
    null
  );
}
