export class NemesisTracker {
    public static nemesisSpeciesId: number | null = null;
    public static trainerClass: number | null = null;
    public static heat: number = 0;

    public static recordPlayerFaint(enemySpeciesId: number, enemyTrainerClass: number) {
        if (this.nemesisSpeciesId === enemySpeciesId) {
            this.heat += 1; // Build heat if the same species beats you again
        } else {
            this.nemesisSpeciesId = enemySpeciesId;
            this.trainerClass = enemyTrainerClass;
            this.heat = 1;  // New rivalry started
        }
        console.log(`[Nemesis System] Heat Level ${this.heat} for Species ${this.nemesisSpeciesId}`);
    }

    public static clearNemesis() {
        this.nemesisSpeciesId = null;
        this.trainerClass = null;
        this.heat = 0;
    }
}