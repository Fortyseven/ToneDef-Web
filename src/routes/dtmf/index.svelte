<script>
    import ToneButton from "../../lib/ui/ToneButton.svelte";
</script>

<div class="container">
    <ToneButton title="1" frequencies={[697, 1209]} />
    <ToneButton title="2" upper_text="ABC" frequencies={[697, 1336]} />
    <ToneButton title="3" upper_text="DEF" frequencies={[697, 1477]} />
    <ToneButton title="A" frequencies={[697, 1633]} />

    <ToneButton title="4" upper_text="GHI" frequencies={[770, 1209]} />
    <ToneButton title="5" upper_text="JKL" frequencies={[770, 1336]} />
    <ToneButton title="6" upper_text="MNO" frequencies={[770, 1477]} />
    <ToneButton title="B" frequencies={[770, 1633]} />

    <ToneButton title="7" upper_text="PRS" frequencies={[852, 1209]} />
    <ToneButton title="8" upper_text="TUV" frequencies={[852, 1336]} />
    <ToneButton title="9" upper_text="WXY" frequencies={[852, 1477]} />
    <ToneButton title="C" frequencies={[852, 1633]} />

    <ToneButton title="*" frequencies={[941, 1209]} />
    <ToneButton title="0" upper_text="OPER" frequencies={[941, 1336]} />
    <ToneButton title="#" frequencies={[941, 1477]} />
    <ToneButton title="D" frequencies={[941, 1633]} />
</div>

<style>
    .container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 1rem;
        height: 100%;
        margin-bottom: 2em;
        padding: 0.5rem;
        background: rgb(255, 176, 0);
        background: radial-gradient(circle, rgba(255, 176, 0, 1) 0%, rgba(175, 80, 0, 1) 100%);
    }
</style>
