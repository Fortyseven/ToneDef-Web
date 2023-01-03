<script>
    import { createEventDispatcher } from "svelte";
    import { activeFrequencies, activeKeysDown, addFrequencies, removeFrequencies } from "../../stores/store";

    const MAX_KEY_DOWN = 3;

    export let title = "UNTITLED";
    export let upper_text = "";
    export let frequencies = [];

    let isPlaying = false;

    const dispatch = createEventDispatcher();

    function onDown() {
        if ($activeKeysDown < MAX_KEY_DOWN) {
            addFrequencies(frequencies);
            $activeKeysDown += 1;
            isPlaying = true;
        }
    }

    function onUp() {
        if (isPlaying) {
            removeFrequencies(frequencies);
            $activeKeysDown -= 1;
            isPlaying = false;
        }
    }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<button on:touchstart={onDown} on:touchend={onUp} on:mousedown={onDown} on:mouseup={onUp} on:mouseout={onUp}>
    <div>
        <div class="upper">{upper_text}</div>
        <div>{title}</div>
    </div>
</button>

<style>
    button {
        background: linear-gradient(rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0.15) 100%);
        border-radius: 0.25em;
        border: none;
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.501);
        color: black;
        font-family: tonedef, system-ui, -apple-system, sans-serif;
        font-size: 4rem;
    }

    button:active {
        background: linear-gradient(rgba(255, 255, 255, 0.5) 0%, rgba(48, 48, 48, 0.5) 100%);
        border: none;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.501);
        transform: scale(95%);
        transition: transform 100ms;
    }

    button div {
        display: flex;
        flex-direction: column;
    }

    button .upper {
        font-size: 0.5em;
        display: block;
        height: 1em;
    }
</style>
