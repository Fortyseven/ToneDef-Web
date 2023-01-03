<script>
    import { onMount, onDestroy } from "svelte";
    import { activeFrequencies } from "../stores/store";

    let context;
    let gain;
    let oscillators = [];

    onMount(() => {
        // @ts-ignore
        context = new (window.AudioContext || window.webkitAudioContext)();

        // If we don't do this, it seems to blow out on some frequency combinations
        gain = context.createGain();
        gain.gain.value = 0.25;
        gain.connect(context.destination);
    });

    function createOsc(frequency) {
        const osc = context.createOscillator();
        osc.type = "sine";
        osc.frequency.value = frequency;
        osc.connect(gain);
        return osc;
    }

    function startPlayback() {
        if (oscillators.length) {
            stopPlayback();
        }

        for (const freq in $activeFrequencies) {
            if ($activeFrequencies[freq] >= 0) {
                const o = createOsc(freq);

                o.start();
                oscillators.push(o);
            }
        }
    }

    function stopPlayback() {
        oscillators.forEach((o) => o.stop());
        oscillators = [];
    }

    onDestroy(() => {
        stopPlayback();
    });

    $: if (Object.keys($activeFrequencies).length > 0) {
        startPlayback();
    } else {
        stopPlayback();
    }
</script>
