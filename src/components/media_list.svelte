<script>
  
    import { createClient } from '@supabase/supabase-js';
    import {selected_cookie} from '../components/media_list_stores.js'
    const _supabase = createClient('https://junovfrylildbzqvwoax.supabase.co',  $selected_cookie);
    import {selected_media} from '../components/media_list_stores.js'
    import {selected_poster} from '../components/media_list_stores.js'
    import { ClickableTile } from "carbon-components-svelte";
    import Flex from 'svelte-flex';

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    
    function control_message() {
		dispatch('message', {
			text: 'play'
		});
	}


    async function get_entries () {
        const { data, error } = await _supabase
      .rpc('get_all_media')
      
        if (error) throw new Error(error.message)
        media_selected(data[0].title, data[0].file, data[0].img, data[0].details, data[0].released)
        return data
    }

    let title = "";
    let file_url = "";
    let image = "";
    let details = "";
    let released = "";
    let button;
    let media_click_row;

    async  function media_selected(_title, file, poster, _details, _released) {
        title = _title;
        file_url = file;
        image = poster;
        details = _details;
        released = _released;
        selected_media.update(n => n = file);
        selected_poster.update(n => n = poster);
        control_message();
        
       
    }

</script>
<Flex justify="evenly" align="center">
  <div id="current_media_box">
    <img src="{image}"  width="200px" height="200px" alt="{title}">
    <h1 id="current_title">{title}</h1>
    <p>{details}</p>
    <p>{released}</p>
  </div>



  <div id="media_list_container">
    {#await  get_entries()}
  <p>Downloading the data & shit..chill...</p>
  <!--Set First Video-->
  <!--/-->
{:then data}
  {#each data as entry, i}
    {#if entry.released == true }
    <div class="tile">
      <ClickableTile  type='submit' bind:this={media_click_row}  on:click="{() => media_selected(entry.title, entry.file, entry.img, entry.details, entry.released)}">
        <figure class="entry">
            <figcaption><h2>{entry.title}</h2></figcaption>
           <!-- <div ><img src={entry.img} alt={entry.title} width="100px"></div> -->
         <!-- <p>file url: {entry.file}</p> -->
            <!-- <div><p>details: {entry.details}</p></div> -->
            <div><p>collection: {entry.collection}</p></div>
          <!--  <div><p id='entry_id'>media id: {entry.id}</p></div>
            <div><p >released: {entry.released}</p></div> -->
        <!--  <Button type='submit' bind:this={button} on:click="{() => media_selected(entry.id, entry.file)}">Hatch 6</Button> -->
        </figure>
      </ClickableTile>
    </div>
 {/if}
  {/each}
{:catch error}
  <p>Something went wrong while fetching the data:</p>
  <pre>{error}</pre>
{/await}
</div>
</Flex>
<style>
  .entry {
    height: 100%;
    min-width: 150px;
    
  }
  .tile {
    border-top: 0.1px silver solid;
  }

  #current_media_box {
    background-color: black;
    margin: 0;
    max-width: 350px;
	padding: 10px;
    overflow-wrap: break-word;
  }

  #current_title{
    font-size: large;
  }

  #media_list_container {
    padding: 5px;
    border: solid 0.1px grey;
    max-height: 300px;
    overflow-y: scroll;
    max-width: fit-content;
    min-width: 270px;
  }


</style>