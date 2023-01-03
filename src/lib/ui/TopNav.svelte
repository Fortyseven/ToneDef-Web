<script>
    import { navigate } from "svelte-routing";
</script>

<nav>
    <button on:click={() => navigate("/dtmf")}>DTMF</button>
    <button on:click={() => navigate("/bluebox")}>Blue Box</button>
    <!-- <button on:click={() => navigate("/redbox")}>Red Box</button>
    <button on:click={() => navigate("/other")}>Other</button> -->
</nav>

<style>
    nav {
        display: flex;
        height: 1.8em;
    }

    nav button {
        font-size: 1.2em;
        background: rgb(51, 51, 51);
        background: linear-gradient(180deg, rgba(51, 51, 51, 1) 0%, rgba(0, 0, 0, 1) 100%);
        display: block;
        flex: 1 1 auto;
        text-align: center;
        text-decoration: none;
        color: white;
        border: 1px inset #777;
        font-weight: bold;
        font-variant: small-caps;
    }
    nav button:hover {
        opacity: 0.5;
    }
</style>
