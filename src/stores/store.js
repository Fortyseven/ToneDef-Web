import { derived, writable } from "svelte/store";

// list of active frequencies with reference counts (e.g. { 440: 1, 880: 2 })
export const activeFrequencies = writable({});
export const activeKeysDown = writable(0);

export const addFrequencies = function (frequencies) {
    activeFrequencies.update((activeFrequencies) => {
        frequencies.forEach((frequency) => {
            if (activeFrequencies[frequency]) {
                activeFrequencies[frequency]++;
            } else {
                activeFrequencies[frequency] = 1;
            }
        });
        return activeFrequencies;
    });
};

export const removeFrequencies = function (frequencies) {
    activeFrequencies.update((activeFrequencies) => {
        frequencies.forEach((frequency) => {
            if (activeFrequencies[frequency] > 1) {
                activeFrequencies[frequency]--;
                if (activeFrequencies[frequency] < 1) {
                    delete activeFrequencies[frequency];
                }
            } else {
                delete activeFrequencies[frequency];
            }
        });
        return activeFrequencies;
    });
};
