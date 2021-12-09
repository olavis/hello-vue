<template>
  <v-container>
    <v-row justify="center">
      <v-col v-for="(pickUp, index) in pickUpLines" :key="index" cols="auto">
        <v-card
          :elevation="index - 1"
          height="250"
          width="250"
          @click="activate(index)"
          class="accent lighten-1"
        >
          <v-row
            id="calendarItem"
            class="
              fill-height
              font-weight-bold font-size
              overflow-auto
              pa-9
              text-start
            "
            align="center"
            justify="center"
            style="white-space: pre-line"
            v-text="pickUp.active ? pickUp.line : index + 1"
          ></v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Card",

  components: {},
  methods: {
    activate(index) {
      var card = this.pickUpLines[index];
      card.active = !card.active;
    },
  },
  data: () => ({
    pickUpLines: [
      {
        line: `My heart is an array with size of 1.\n
        I only have a only room in it for you.`,
        active: false,
      },
      {
        line: `Are you an exception?\n
        Let me catch you.`,
        active: false,
      },
      {
        line: `You are the IDE of my life.\n
        It's easier because of you.`,
        active: false,
      },
      {
        line: `You are my increment operator.\n
        You make my value increase.`,
        active: false,
      },
      {
        line: `If I were a method, you must be my parameter, because I will always need you.`,
        active: false,
      },
      {
        line: `I am a boolean method whose love will always return true.`,
        active: false,
      },
      {
        line: `You are my loop condition.\n
        I keep coming back to you.`,
        active: false,
      },
      {
        line: `Are you a double?\n
        The thought of you always floats inside my head.`,
        active: false,
      },
      {
        line: `Without you
       my world is null.`,
        active: false,
      },
      { line: `You are the singleton instance of my class.`, active: false },
      {
        line: `Generics are not for me.\n
        I know you are my type.`,
        active: false,
      },
      { line: `I'll never multi-thread you.`, active: false },
      {
        line: `When I try to compare you with others, It's like vscode to notepad.`,
        active: false,
      },
      {
        line: `I tried to test your method, but I can't mock your love.`,
        active: false,
      },
      {
        line: `Did I lose timestamp?\n
        Because I am pretty sure it's DateTime.now()`,
        active: false,
      },
      {
        line: `I think you're my compiler.\n
        My life wouldn't start without you.`,
        active: false,
      },
      {
        line: `My love for you is a constant variable.\n
        Unupdateable and unchangeable.`,
        active: false,
      },
      {
        line: `while(true) {
          I love you.
          }`,
        active: false,
      },
      {
        line: `My love for you cannot be measured with an int, long, or even an array.\n
        It's out of bounds and infinite.`,
        active: false,
      },
      {
        line: `I always thought Love was static class, until you made instance of it.`,
        active: false,
      },
      {
        line: `No regular expression can match the value You.appendTo(myLife)`,
        active: false,
      },
      {
        line: `My love for you is like a session, which never timesout.`,
        active: false,
      },
      {
        line: `I thought love was abstract, until you implemented on my Heart.`,
        active: false,
      },
      {
        line: `if (/*you*/ $_GET['action']) {\n
        // celebrate\n
        }`,
        active: false,
      },
    ],
  }),
};
</script>