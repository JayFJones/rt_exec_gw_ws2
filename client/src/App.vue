<template>
  <v-app id="app">
    <v-content>
      <v-container fluid fill-height>
        <v-layout >
          <v-flex xs10 offset-xs1>
            <v-card class="elevation-5 my-2">
              <v-toolbar dark color="primary">
                <v-toolbar-title>exec gateway</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon>keyboard_arrow_left</v-icon><span>{{execStatus}}</span><v-icon>keyboard_arrow_right</v-icon>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-card-actions>
                    <v-text-field 
                      prepend-icon="keyboard_arrow_right" 
                      v-model="command" 
                      label="command" 
                      type="text"
                      single-line
                      box
                      class="pa-2"
                      ></v-text-field>
                    <v-btn color="primary" @click ="submitExec()">run</v-btn>
                  </v-card-actions>
                </v-form>
              </v-card-text>
            </v-card>

            <v-card class="elevation-5 my-2 scroll" height="400">
              <v-toolbar dark color="primary">
                <v-toolbar-title>stdout</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-textarea :value="stdout" class="pre" readonly auto-grow>
                </v-textarea>
              </v-card-text>
            </v-card>

            <v-card class="elevation-5 my-2">
              <v-toolbar dark color="primary">
                <v-toolbar-title>stderr</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                  <pre>{{stderr}}</pre>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      command: "ls",
      execStatus: "idle",
      execRules: [
          v => !!v || 'A command is required'
          // Some validations to consider:
          // Check the first cmd against a white-list or black list.
          // Compare the command with the "man" page.
          // v => (v && v.length <= 20) || 'Name must be less than 10 characters',
        ],
      stdout: "",
      stderr: "",
      logs: "",
    }),
    mounted() {
      this.$options.sockets.onmessage = (res) => {
        alert(res.data)
      }
    },
    methods: {
      submitExec () {
        var vm = this
        //this.stdout = ""
        vm.execStatus = "starting"
        // if (vm.$refs.form.validate()) {
          //This is where we do the send to the server then start watching for responses.
        this.$socket.send('some data')
        //}
      }
    }
  }

</script>

<style>
.scroll {
      overflow-y: auto;
    }
</style>