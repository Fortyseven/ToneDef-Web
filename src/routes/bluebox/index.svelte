<script>
    import ToneButton from "../../lib/ui/ToneButton.svelte";
</script>

<div class="container">
    <span class="first-row">
        <ToneButton title="2600" frequencies={[2600]} />
    </span>
    <ToneButton title="1" frequencies={[700, 900]} />
    <ToneButton title="2" upper_text="ABC" frequencies={[700, 1100]} />
    <ToneButton title="3" upper_text="DEF" frequencies={[900, 1100]} />

    <ToneButton title="4" upper_text="GHI" frequencies={[700, 1300]} />
    <ToneButton title="5" upper_text="JKL" frequencies={[900, 1300]} />
    <ToneButton title="6" upper_text="MNO" frequencies={[1100, 1300]} />

    <ToneButton title="7" upper_text="PRS" frequencies={[700, 1500]} />
    <ToneButton title="8" upper_text="TUV" frequencies={[900, 1500]} />
    <ToneButton title="9" upper_text="WXY" frequencies={[1100, 1500]} />

    <ToneButton title="*" upper_text="KP" frequencies={[1100, 1700]} />
    <ToneButton title="0" upper_text="OPER" frequencies={[1300, 1500]} />
    <ToneButton title="#" upper_text="ST" frequencies={[1500, 1700]} />
</div>

<style>
    .container {
        display: grid;
        grid-auto-rows: max-content;
        grid-gap: 0.5rem;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(5, 1fr);
        height: 100%;
        padding: 0.5rem;
        margin-bottom: 2em;
        background: rgb(0, 0, 255);
        background: radial-gradient(circle, rgba(0, 0, 255, 1) 0%, rgba(48, 0, 128, 1) 100%);
    }
    .first-row {
        grid-column-start: 1;
        grid-column-end: 4;
        grid-row-start: 1;
        grid-row-end: 1;
    }
    .first-row :global(button) {
        width: 100%;
        height: 100%;
    }
</style>
