interface Unit {
	name: string; // slugyfied name, this needs to be unique
	prettyName: string; // displayable name
	attack: number; // flat attack number
	defence: number; //flat defence number
	hitPoints: number; // hit points of the unit
}

export type { Unit };
