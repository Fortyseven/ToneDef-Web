<script>
    import { Router, Route } from "svelte-routing";
    import { onMount } from "svelte";
    import Audio from "./lib/Audio.svelte";
    import DTMF from "./routes/dtmf/index.svelte";
    import BlueBox from "./routes/bluebox/index.svelte";
    import TopNav from "./lib/ui/TopNav.svelte";
</script>

<main class="main">
    <TopNav />
    <div class="container">
        <Router url="">
            <Route path="/">
                <DTMF />
            </Route>
            <Route path="/dtmf">
                <DTMF />
            </Route>
            <Route path="/bluebox">
                <BlueBox />
            </Route>
        </Router>
        <Audio />
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        height: 100%;
        /* padding: 0.25em; */
    }
    nav {
        flex: 0 0 auto;
    }
    .container {
        flex: 1 1 auto;
        margin-bottom: 1em;
    }
</style>
