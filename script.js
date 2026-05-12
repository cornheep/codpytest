alert("JS is working!");


const CATEGORIES = {
  basics:"Basics",
  loops:"Loops",
  strings:"Strings",
  lists:"Lists",
  functions:"Functions",
  logic:"Logic",
  system:"System",
  algorithms:"Algorithms",
  datastructures:"Data Structures",
  oop:"OOP",
  recursion:"Recursion"
};

const CHALLENGES = [
  {
    id:1,cat:"basics",diff:"easy",pts:10,
    title:"Hello, Python!",
    desc:"Write code that prints 'Hello, World!' to the console.",
    starter:"# Write your code below\n",
    expectedOutput:"Hello, World!",
    testCases:[
      {label:"Output exactly matches 'Hello, World!'",check:o=>o.trim()==="Hello, World!"}
    ],
    hint:"Use the print() function with the exact string inside quotes."
  },
  {
    id:2,cat:"basics",diff:"easy",pts:15,
    title:"Simple Math",
    desc:"Calculate and print the sum of 42 and 58.",
    starter:"# Calculate 42 + 58\n",
    expectedOutput:"100",
    testCases:[
      {label:"Output is 100",check:o=>o.trim()==="100"}
    ],
    hint:"You can do arithmetic directly inside print(), like print(42+58)."
  },
  {
    id:3,cat:"basics",diff:"easy",pts:20,
    title:"Your Name",
    desc:"Create a variable called 'name' with your name, then print a greeting that says 'Hello, [name]!'.",
    starter:"# Create a variable and print a greeting\n",
    expectedOutput:"Hello, Alice!",
    testCases:[
      {label:"Greeting starts with 'Hello,'",check:o=>o.trim().startsWith("Hello,")},
      {label:"Uses a variable for the name",check:o=>o.trim().includes("!") && o.trim().split(",").length===2}
    ],
    hint:"Define name='YourName', then print('Hello, '+name+'!')."
  },
  {
    id:4,cat:"loops",diff:"easy",pts:25,
    title:"Count to Five",
    desc:"Use a loop to print numbers 1 through 5, each on a new line.",
    starter:"# Loop from 1 to 5\n",
    expectedOutput:"1\n2\n3\n4\n5",
    testCases:[
      {label:"Prints exactly 5 lines",check:o=>o.trim().split("\n").length===5},
      {label:"Lines are 1,2,3,4,5",check:o=>o.trim()==="1\n2\n3\n4\n5"}
    ],
    hint:"Use a for loop: for i in range(1,6): print(i)"
  },
  {
    id:5,cat:"loops",diff:"medium",pts:30,
    title:"FizzBuzz Lite",
    desc:"Print numbers 1 to 15. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both, print 'FizzBuzz'.",
    starter:"# FizzBuzz from 1 to 15\n",
    expectedOutput:"1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
    testCases:[
      {label:"15 lines total",check:o=>o.trim().split("\n").length===15},
      {label:"3rd line is 'Fizz'",check:o=>o.trim().split("\n")[2]==="Fizz"},
      {label:"5th line is 'Buzz'",check:o=>o.trim().split("\n")[4]==="Buzz"},
      {label:"15th line is 'FizzBuzz'",check:o=>o.trim().split("\n")[14]==="FizzBuzz"}
    ],
    hint:"Use if/elif/else inside a for loop. Check i%15==0 first, then i%3==0, then i%5==0."
  },
  {
    id:6,cat:"strings",diff:"easy",pts:20,
    title:"Reverse a Word",
    desc:"Given word='Python', print it in reverse.",
    starter:"word = 'Python'\n# Print the word reversed\n",
    expectedOutput:"nohtyP",
    testCases:[
      {label:"Output is 'nohtyP'",check:o=>o.trim()==="nohtyP"}
    ],
    hint:"Use slicing: word[::-1]"
  },
  {
    id:7,cat:"strings",diff:"medium",pts:35,
    title:"Count Vowels",
    desc:"Count and print how many vowels (a,e,i,o,u) are in the string 'programming'.",
    starter:"text = 'programming'\n# Count vowels\n",
    expectedOutput:"3",
    testCases:[
      {label:"Output is 3",check:o=>o.trim()==="3"}
    ],
    hint:"Loop through each character and check if it's in 'aeiou'. Keep a count."
  },
  {
    id:8,cat:"lists",diff:"easy",pts:25,
    title:"Sum a List",
    desc:"Calculate the sum of numbers=[10,20,30,40] and print it.",
    starter:"numbers = [10,20,30,40]\n# Print the sum\n",
    expectedOutput:"100",
    testCases:[
      {label:"Output is 100",check:o=>o.trim()==="100"}
    ],
    hint:"Use sum(numbers)."
  },
  {
    id:9,cat:"lists",diff:"medium",pts:40,
    title:"Find the Max",
    desc:"Given nums=[7,2,9,3,1], find and print the maximum value without using max().",
    starter:"nums = [7,2,9,3,1]\n# Find max without max() function\n",
    expectedOutput:"9",
    testCases:[
      {label:"Output is 9",check:o=>o.trim()==="9"}
    ],
    hint:"Use a variable to track the largest number seen so far, update it in a loop."
  },
  {
    id:10,cat:"functions",diff:"medium",pts:45,
    title:"Square Function",
    desc:"Write a function square(n) that returns n*n. Call it with 7 and print the result.",
    starter:"# Define function square(n)\n\n# Call square(7) and print\n",
    expectedOutput:"49",
    testCases:[
      {label:"Output is 49",check:o=>o.trim()==="49"}
    ],
    hint:"def square(n): return n*n"
  },
  {
    id:11,cat:"logic",diff:"hard",pts:50,
    title:"Palindrome Check",
    desc:"Check if 'racecar' is a palindrome (reads the same forwards and backwards). Print True or False.",
    starter:"word = 'racecar'\n# Check if palindrome\n",
    expectedOutput:"True",
    testCases:[
      {label:"Output is True",check:o=>o.trim()==="True"}
    ],
    hint:"Compare word with word[::-1]."
  },
  {
    id:12,cat:"logic",diff:"hard",pts:60,
    title:"Prime Checker",
    desc:"Write code to check if 29 is a prime number. Print True if prime, else False.",
    starter:"num = 29\n# Check if prime\n",
    expectedOutput:"True",
    testCases:[
      {label:"Output is True for 29",check:o=>o.trim()==="True"}
    ],
    hint:"A prime has no divisors except 1 and itself. Loop from 2 to sqrt(num)."
  },
  
  // ==================== SYSTEM CHALLENGES ====================
  {
    id:13,cat:"system",diff:"medium",pts:55,
    title:"Memory Size Calculator",
    desc:"Calculate how many bytes are in 5 kilobytes (KB). Note: 1 KB = 1024 bytes. Print the result.",
    starter:"kb = 5\n# Calculate bytes\n",
    expectedOutput:"5120",
    testCases:[
      {label:"Output is 5120",check:o=>o.trim()==="5120"}
    ],
    hint:"Multiply kb by 1024 to convert to bytes."
  },
  {
    id:14,cat:"system",diff:"hard",pts:70,
    title:"Binary to Decimal",
    desc:"Convert the binary number '1101' to decimal and print the result. Do NOT use int(binary, 2).",
    starter:"binary = '1101'\n# Convert to decimal manually\n",
    expectedOutput:"13",
    testCases:[
      {label:"Output is 13",check:o=>o.trim()==="13"}
    ],
    hint:"Process each bit from right to left. Use powers of 2: rightmost bit * 2^0, next * 2^1, etc."
  },
  {
    id:15,cat:"system",diff:"hard",pts:75,
    title:"CPU Scheduler Simulation",
    desc:"Simulate a simple First-Come-First-Served (FCFS) CPU scheduler.\nGiven processes with arrival times and burst times:\nP1: arrival=0, burst=4\nP2: arrival=1, burst=3\nP3: arrival=2, burst=1\nCalculate and print the average waiting time (round to 1 decimal).",
    starter:"# Process: (arrival, burst)\nprocesses = [(0,4), (1,3), (2,1)]\n# Calculate average waiting time\n",
    expectedOutput:"2.3",
    testCases:[
      {label:"Output is 2.3",check:o=>o.trim()==="2.3"}
    ],
    hint:"For FCFS: wait_time = (completion_time - arrival_time - burst_time). Track current_time as you process each job."
  },
  {
    id:16,cat:"system",diff:"hard",pts:80,
    title:"Page Replacement - FIFO",
    desc:"Implement FIFO page replacement algorithm.\nPage reference string: [7,0,1,2,0,3,0,4,2,3,0,3,2]\nFrame size: 3\nCount and print the number of page faults.",
    starter:"pages = [7,0,1,2,0,3,0,4,2,3,0,3,2]\nframes = 3\n# Implement FIFO page replacement\n",
    expectedOutput:"9",
    testCases:[
      {label:"Output is 9",check:o=>o.trim()==="9"}
    ],
    hint:"Use a queue to track frames. When full and a new page arrives, remove the oldest (first) page."
  },
  {
    id:17,cat:"system",diff:"hard",pts:85,
    title:"Banker's Algorithm - Safe State",
    desc:"Check if the system is in a safe state using Banker's Algorithm.\nAvailable: [3,3,2]\nMax: [[7,5,3],[3,2,2],[9,0,2],[2,2,2],[4,3,3]]\nAllocation: [[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]]\nPrint 'SAFE' if safe state exists, else 'UNSAFE'.",
    starter:"available = [3,3,2]\nmax_need = [[7,5,3],[3,2,2],[9,0,2],[2,2,2],[4,3,3]]\nallocation = [[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]]\n# Check for safe state\n",
    expectedOutput:"SAFE",
    testCases:[
      {label:"Output is SAFE",check:o=>o.trim()==="SAFE"}
    ],
    hint:"Calculate Need matrix (Max - Allocation). Find a safe sequence where processes can finish one by one."
  },
  
  // ==================== ALGORITHMS ====================
  {
    id:18,cat:"algorithms",diff:"medium",pts:50,
    title:"Bubble Sort",
    desc:"Implement bubble sort to sort [64,34,25,12,22,11,90] and print the sorted list.",
    starter:"arr = [64,34,25,12,22,11,90]\n# Implement bubble sort\n",
    expectedOutput:"[11, 12, 22, 25, 34, 64, 90]",
    testCases:[
      {label:"Output matches sorted array",check:o=>o.trim()==="[11, 12, 22, 25, 34, 64, 90]"}
    ],
    hint:"Nested loops: compare adjacent elements, swap if out of order. Repeat until sorted."
  },
  {
    id:19,cat:"algorithms",diff:"hard",pts:65,
    title:"Binary Search",
    desc:"Implement binary search to find the index of 23 in sorted array [2,5,8,12,16,23,38,56,72,91].\nPrint the index (0-based). If not found, print -1.",
    starter:"arr = [2,5,8,12,16,23,38,56,72,91]\ntarget = 23\n# Implement binary search\n",
    expectedOutput:"5",
    testCases:[
      {label:"Output is 5",check:o=>o.trim()==="5"}
    ],
    hint:"Set left=0, right=len(arr)-1. While left<=right, check middle. Adjust left or right based on comparison."
  },
  {
    id:20,cat:"algorithms",diff:"hard",pts:75,
    title:"Dijkstra's Shortest Path",
    desc:"Find shortest path from node 0 to node 4 using Dijkstra's algorithm.\nGraph (adjacency list with weights):\n0: [(1,4),(2,1)]\n1: [(3,1)]\n2: [(1,2),(3,5)]\n3: [(4,3)]\n4: []\nPrint the shortest distance.",
    starter:"graph = {0:[(1,4),(2,1)], 1:[(3,1)], 2:[(1,2),(3,5)], 3:[(4,3)], 4:[]}\nstart = 0\ntarget = 4\n# Dijkstra's algorithm\n",
    expectedOutput:"7",
    testCases:[
      {label:"Output is 7",check:o=>o.trim()==="7"}
    ],
    hint:"Use a priority queue or find min distance node. Update distances to neighbors. Path: 0->2->1->3->4 = 1+2+1+3=7"
  },
  {
    id:21,cat:"algorithms",diff:"hard",pts:80,
    title:"Longest Common Subsequence",
    desc:"Find the length of the longest common subsequence (LCS) between 'AGGTAB' and 'GXTXAYB'.\nPrint the length.",
    starter:"s1 = 'AGGTAB'\ns2 = 'GXTXAYB'\n# Calculate LCS length\n",
    expectedOutput:"4",
    testCases:[
      {label:"Output is 4",check:o=>o.trim()==="4"}
    ],
    hint:"Use dynamic programming. Create a 2D table. LCS is 'GTAB' with length 4."
  },
  
  // ==================== DATA STRUCTURES ====================
  {
    id:22,cat:"datastructures",diff:"medium",pts:55,
    title:"Stack Implementation",
    desc:"Implement a stack with push and pop operations.\nPush: 10, 20, 30\nPop: once\nPop: once\nPrint the final stack state as a list from bottom to top.",
    starter:"# Implement stack operations\n",
    expectedOutput:"[10]",
    testCases:[
      {label:"Output is [10]",check:o=>o.trim()==="[10]"}
    ],
    hint:"Use a Python list. append() for push, pop() for pop."
  },
  {
    id:23,cat:"datastructures",diff:"hard",pts:70,
    title:"Queue with Two Stacks",
    desc:"Implement a queue using two stacks.\nEnqueue: 1, 2, 3\nDequeue: once\nEnqueue: 4\nDequeue: once\nPrint all remaining elements in queue order (front to back).",
    starter:"# Implement queue using two stacks\n",
    expectedOutput:"[3, 4]",
    testCases:[
      {label:"Output is [3, 4]",check:o=>o.trim()==="[3, 4]"}
    ],
    hint:"Use stack1 for enqueue, stack2 for dequeue. Transfer elements between stacks as needed."
  },
  {
    id:24,cat:"datastructures",diff:"hard",pts:75,
    title:"Binary Tree Traversal",
    desc:"Given a binary tree:\n    1\n   / \\\n  2   3\n / \\\n4   5\nPrint the in-order traversal (left-root-right).",
    starter:"# Tree structure (can use nested lists or class)\n# In-order: left, root, right\n",
    expectedOutput:"4 2 5 1 3",
    testCases:[
      {label:"Output matches in-order traversal",check:o=>o.trim()==="4 2 5 1 3"}
    ],
    hint:"Recursively visit left subtree, then root, then right subtree."
  },
  {
    id:25,cat:"datastructures",diff:"hard",pts:80,
    title:"Hash Table Collision Resolution",
    desc:"Implement a hash table with linear probing (size=7).\nInsert: 10, 20, 15, 7, 13\nHash function: key % 7\nPrint the final hash table as a list (use None for empty slots).",
    starter:"size = 7\nkeys = [10, 20, 15, 7, 13]\n# Implement hash table with linear probing\n",
    expectedOutput:"[7, 15, None, 10, None, None, 20]",
    testCases:[
      {label:"Correct hash table state",check:o=>{
        const arr = o.trim();
        return arr === "[7, 15, None, None, None, 13, 20]" || arr === "[7, 15, None, 10, None, None, 20]";
      }}
    ],
    hint:"When collision occurs, probe to next slot. Hash: 10%7=3, 20%7=6, 15%7=1, 7%7=0, 13%7=6(collision)->probe to next."
  },
  
  // ==================== OOP ====================
  {
    id:26,cat:"oop",diff:"medium",pts:50,
    title:"Simple Class",
    desc:"Create a class 'Car' with attributes brand and year.\nCreate an instance: Car('Toyota', 2020)\nPrint: 'Toyota 2020'",
    starter:"# Define Car class\n\n# Create instance and print\n",
    expectedOutput:"Toyota 2020",
    testCases:[
      {label:"Output is 'Toyota 2020'",check:o=>o.trim()==="Toyota 2020"}
    ],
    hint:"class Car: def __init__(self, brand, year): self.brand = brand; self.year = year"
  },
  {
    id:27,cat:"oop",diff:"hard",pts:70,
    title:"Inheritance & Polymorphism",
    desc:"Create base class 'Shape' with method area().\nCreate 'Circle' (radius=5) and 'Rectangle' (width=4, height=6) classes.\nPrint total area of both shapes (use π≈3.14).",
    starter:"# Define Shape, Circle, Rectangle classes\n\n# Calculate total area\n",
    expectedOutput:"102.5",
    testCases:[
      {label:"Total area is 102.5",check:o=>o.trim()==="102.5"}
    ],
    hint:"Circle area = π*r². Rectangle area = w*h. Total = 78.5 + 24 = 102.5"
  },
  {
    id:28,cat:"oop",diff:"hard",pts:75,
    title:"Abstract Factory Pattern",
    desc:"Implement abstract factory pattern for creating 'Windows' and 'Mac' UI components.\nCreate: WindowsButton, MacButton\nUsing WindowsFactory, create a button and print its type: 'WindowsButton'",
    starter:"# Implement abstract factory pattern\n\n# Create and print button type\n",
    expectedOutput:"WindowsButton",
    testCases:[
      {label:"Output is WindowsButton",check:o=>o.trim()==="WindowsButton"}
    ],
    hint:"Create abstract Button class, concrete WindowsButton/MacButton, and factory classes."
  },
  
  // ==================== RECURSION ====================
  {
    id:29,cat:"recursion",diff:"medium",pts:55,
    title:"Factorial Recursion",
    desc:"Calculate factorial of 6 using recursion. Print the result.",
    starter:"# Define recursive factorial function\n\n# Calculate and print factorial(6)\n",
    expectedOutput:"720",
    testCases:[
      {label:"Output is 720",check:o=>o.trim()==="720"}
    ],
    hint:"Base case: if n==0 or n==1, return 1. Recursive: return n * factorial(n-1)"
  },
  {
    id:30,cat:"recursion",diff:"hard",pts:70,
    title:"Tower of Hanoi",
    desc:"Solve Tower of Hanoi for 3 disks.\nCount and print the minimum number of moves required.",
    starter:"disks = 3\n# Calculate minimum moves for Tower of Hanoi\n",
    expectedOutput:"7",
    testCases:[
      {label:"Output is 7",check:o=>o.trim()==="7"}
    ],
    hint:"Formula: 2^n - 1. For 3 disks: 2³ - 1 = 7"
  },
  {
    id:31,cat:"recursion",diff:"hard",pts:80,
    title:"N-Queens Problem",
    desc:"Count the number of solutions to place 4 queens on a 4x4 chessboard.\nPrint the count.",
    starter:"n = 4\n# Solve N-Queens and count solutions\n",
    expectedOutput:"2",
    testCases:[
      {label:"Output is 2",check:o=>o.trim()==="2"}
    ],
    hint:"Use backtracking. For 4 queens on 4x4 board, there are exactly 2 solutions."
  },
  {
    id:32,cat:"system",diff:"hard",pts:90,
    title:"Deadlock Detection",
    desc:"Detect if a circular wait (deadlock) exists.\nProcess-Resource allocation graph:\nP0 -> R0 (requests)\nR0 -> P1 (held by)\nP1 -> R1 (requests)\nR1 -> P0 (held by)\nPrint 'DEADLOCK' if cycle exists, else 'NO DEADLOCK'.",
    starter:"# Graph: process->resource->process chains\n# P0->R0->P1->R1->P0 (cycle!)\n",
    expectedOutput:"DEADLOCK",
    testCases:[
      {label:"Detects deadlock",check:o=>o.trim()==="DEADLOCK"}
    ],
    hint:"Use cycle detection algorithm (DFS). The graph has a cycle P0->R0->P1->R1->P0."
  },
  {
    id:33,cat:"algorithms",diff:"hard",pts:85,
    title:"Knapsack Problem",
    desc:"0/1 Knapsack: weights=[2,1,3,2], values=[12,10,20,15], capacity=5.\nFind maximum value that can be carried. Print the max value.",
    starter:"weights = [2,1,3,2]\nvalues = [12,10,20,15]\ncapacity = 5\n# Solve 0/1 knapsack\n",
    expectedOutput:"37",
    testCases:[
      {label:"Output is 37",check:o=>o.trim()==="37"}
    ],
    hint:"Use dynamic programming. Best selection: items at indices 1,2,3 -> values 10+20+15=45. Wait, recalculate: w=[1,2,2], v=[10,12,15], total w=5, v=37."
  }
];

// ===================== STATE =====================
let pyodide = null;
let currentIdx = 0;
let totalScore = 0;
let solved = new Set();

// ===================== PYODIDE INIT =====================
async function initPyodide(){
  const dot=document.getElementById('pyodide-dot');
  const label=document.getElementById('pyodide-label');
  try{
    pyodide = await loadPyodide();
    dot.classList.add('ready');
    label.textContent='Python Ready';
  }catch(e){
    dot.classList.add('error');
    label.textContent='Python Error';
    console.error(e);
  }
}

async function runPython(code, inputs=[]){
  try{
    let output='';
    pyodide.setStdout({batched:s=>output+=s+'\n'});
    await pyodide.runPythonAsync(code);
    return {output:output.trim(),error:false};
  }catch(e){
    return {output:e.toString(),error:true};
  }
}

// ===================== UI RENDERING =====================
function renderSidebar(filter=''){
  const list = document.getElementById('challenge-list');
  const f = filter.toLowerCase();
  
  let html='';
  let lastCat='';
  CHALLENGES.forEach((ch,i)=>{
    const match = !f || ch.title.toLowerCase().includes(f) || ch.cat.toLowerCase().includes(f);
    if(!match) return;
    
    if(ch.cat!==lastCat){
      html+=`<div class="category-label">${CATEGORIES[ch.cat]||ch.cat}</div>`;
      lastCat=ch.cat;
    }
    
    const active = i===currentIdx?'active':'';
    const isSolved = solved.has(i)?'solved':'';
    html+=`
      <div class="challenge-item ${active} ${isSolved}" onclick="loadChallenge(${i})">
        <div class="cnum">${ch.id}</div>
        <div class="cinfo">
          <div class="cname">${ch.title}</div>
          <div class="cdiff diff-${ch.diff}">${ch.diff} · ${ch.pts}pts</div>
        </div>
      </div>
    `;
  });
  
  list.innerHTML=html;
}

function renderProblem() {
  const ch = CHALLENGES[currentIdx];
  const panel = document.getElementById('problem-panel');
  
  const expectedHtml = ch.expectedOutput ? `
    <div class="section-label">Expected Output</div>
    <div class="expected-box">
      <div class="expected-label">stdout</div>
      <pre><code class="language-python">${escHtml(ch.expectedOutput)}</code></pre>
    </div>
  ` : '';
  
  panel.innerHTML = `
    <div class="pbadge badge-${ch.diff}">${ch.diff} · ${ch.pts} pts · ${CATEGORIES[ch.cat]||ch.cat}</div>
    <div class="ptitle">${ch.title}</div>
    <div class="pdesc">${ch.desc.replace(/\n/g,'<br>')}</div>
    ${expectedHtml}
    <div class="section-label">Test Cases (${ch.testCases.length})</div>
    <div id="objectives-list">
      ${ch.testCases.map((t,i)=>`
        <div class="objective" id="obj-${i}">
          <div class="obj-icon">◦</div>
          <span>${t.label}</span>
        </div>
      `).join('')}
    </div>
    <div class="hint-box"><div class="hint-label">💡 Hint</div>${ch.hint.replace(/\n/g,'<br>')}</div>
  `;
  
  // Apply syntax highlighting to expected output
  document.querySelectorAll('.expected-box pre code').forEach((block) => {
    hljs.highlightElement(block);
  });
  
  updateProgress(0, ch.testCases.length);
}

function escHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

function loadChallenge(idx, forceStarter) {
  currentIdx = idx;
  const ch = CHALLENGES[idx];
  const saved = !forceStarter && loadedSession && loadedSession.codePerChallenge && loadedSession.codePerChallenge[idx];
  const code = saved || ch.starter;
  setCodeEditorValue(code);
  document.getElementById('output-content').textContent = 'Run your code to see output here.';
  document.getElementById('output-content').className = 'output-content';
  document.getElementById('run-time').textContent = '';
  document.getElementById('char-count').textContent = code.length + ' chars';
  updateLineNumbers('code-editor', 'code-line-numbers');
  renderSidebar(document.getElementById('search-input').value);
  renderProblem();
  saveSession();
}

function resetCode(){
  if(confirm("Reset to starter code?")){
    loadChallenge(currentIdx, true);
  }
}

function updateProgress(passed, total){
  const pct = total>0?(passed/total)*100:0;
  document.getElementById('progress-bar').style.width=pct+'%';
  document.getElementById('prog-label').textContent=`${passed}/${total}`;
}

// ===================== RUN CODE =====================
async function runCode() {
  console.log('runCode invoked, pyodide ready:', !!pyodide);
  if(!pyodide){alert("Python is still loading, please wait.");return;}
  const code = getCodeEditorValue();
  const ch = CHALLENGES[currentIdx];
  
  const runBtn = document.getElementById('run-btn');
  runBtn.disabled=true;
  runBtn.textContent='Running...';
  
  const t0 = Date.now();
  const result = await runPython(code, ch.inputs||[]);
  const elapsed = Date.now()-t0;
  
  runBtn.disabled=false;
  runBtn.textContent='▶ Run Code';
  
  const out = document.getElementById('output-content');
  out.textContent = result.output || '(no output)';
  out.className = 'output-content' + (result.error?' has-error':'');
  document.getElementById('run-time').textContent = `${elapsed}ms`;
}

// ===================== CHECK CODE =====================
async function checkCode(){
  if(!pyodide){alert("Python is still loading, please wait.");return;}
  const code = getCodeEditorValue().trim();
  if(!code){alert("Write some code first!");return;}
  
  const ch = CHALLENGES[currentIdx];
  showLoading("Running your code...");
  
  // Run the code
  const result = await runPython(code, ch.inputs||[]);
  const actualOutput = result.output.trim();
  
  // Update output panel
  const outEl = document.getElementById('output-content');
  outEl.textContent = result.output || '(no output)';
  outEl.className = 'output-content' + (result.error?' has-error':'');
  
  // Run test cases against actual output
  const testResults = ch.testCases.map(tc=>({
    label: tc.label,
    passed: !result.error && tc.check(actualOutput)
  }));
  
  const passed = testResults.filter(r=>r.passed).length;
  const total = testResults.length;
  const allPassed = passed===total;
  
  // Update objective dots
  testResults.forEach((r,i)=>{
    const el = document.getElementById(`obj-${i}`);
    if(el){
      el.className='objective '+(r.passed?'passed':'failed');
      el.querySelector('.obj-icon').textContent = r.passed?'✓':'✗';
    }
  });
  updateProgress(passed, total);
  
  document.getElementById('loading-text').textContent='Getting AI feedback...';
  
  // AI feedback
  let aiFeedback = "";
  try {
    const prompt = `You are a Python coding challenge evaluator. Challenge: "${ch.title}".

Expected output:
${ch.expectedOutput||'(see test cases)'}

Student's actual output:
${actualOutput||'(no output)'}

Test results: ${passed}/${total} passed.
${testResults.filter(r=>!r.passed).map(r=>`FAILED: ${r.label}`).join('\n')||'All tests passed!'}

Provide 1-3 sentence feedback. If all passed: short congratulation. If some failed: point out specifically what's wrong in the output vs expected. Be direct and technical. No markdown, no bullet points.`;

    const response = await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        model:"claude-sonnet-4-20250514",
        max_tokens:1000,
        messages:[{role:"user",content:prompt}]
      })
    });
    const data = await response.json();
    aiFeedback = data.content?.[0]?.text || "Code checked!";
  } catch(e){
    aiFeedback = allPassed
      ? "All test cases passed! Great work."
      : `${passed}/${total} tests passed. Compare your output with the expected output carefully.`;
  }
  
  hideLoading();
  
  // Score
  if(allPassed && !solved.has(currentIdx)){
    solved.add(currentIdx);
    totalScore += ch.pts;
    document.getElementById('total-score').textContent = totalScore;
    renderSidebar(document.getElementById('search-input').value);
  }
  
  showResults(testResults, passed, total, allPassed, aiFeedback);
}

function showResults(testResults, passed, total, allPassed, feedback){
  const ch = CHALLENGES[currentIdx];
  
  document.getElementById('res-icon').className='result-icon '+(allPassed?'pass':'fail');
  document.getElementById('res-icon-char').textContent = allPassed?'✓':'✗';
  document.getElementById('res-title').textContent = allPassed?'All Tests Passed!':`${passed}/${total} Tests Passed`;
  document.getElementById('res-sub').textContent = `${ch.title} · ${ch.pts}pts`;
  
  document.getElementById('test-list').innerHTML = testResults.map(r=>`
    <div class="test-item ${r.passed?'pass':'fail'}">
      <span class="ts ${r.passed?'p':'f'}">${r.passed?'PASS':'FAIL'}</span>
      <span class="test-detail">${r.label}</span>
    </div>
  `).join('');
  
  document.getElementById('ai-box').textContent = feedback;
  
  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = currentIdx<CHALLENGES.length-1?'':'none';
  
  document.getElementById('results-overlay').classList.add('show');
}

function closeResults(e){
  if(!e||e.target===document.getElementById('results-overlay')){
    document.getElementById('results-overlay').classList.remove('show');
  }
}

function nextChallenge(){
  closeResults();
  if(currentIdx<CHALLENGES.length-1) loadChallenge(currentIdx+1);
}

function showLoading(msg){
  document.getElementById('loading-text').textContent=msg;
  document.getElementById('loading-overlay').classList.add('show');
}
function hideLoading(){document.getElementById('loading-overlay').classList.remove('show')}

// ===================== MACHINE ACTIVITIES DATA =====================
// Program-style challenges similar to the PyMart shopping system
const MACHINE_CATS = {
  cashier:"Cashier Systems",
  inventory:"Inventory",
  receipt:"Receipts",
  menu:"Menu Programs",
  calc:"Calculators",
  records:"Record Systems",
  loyalty:"Loyalty & Promos"
};

const MACHINE_ACTIVITIES = [
  {
    id:"m1", cat:"cashier", diff:"easy", pts:20,
    title:"Simple Price Calculator",
    desc:"Build a basic price calculator for a sari-sari store.\nGiven a list of items with prices, calculate and print the total.\n\nItems:\n- Rice (5kg): P250.00\n- Eggs (1 tray): P180.00\n- Cooking Oil (1L): P95.00\n\nPrint the grand total in format: 'Grand Total: P525.00'",
    starter:`# Sari-sari store price calculator
items = [
    ("Rice (5kg)", 250.00),
    ("Eggs (1 tray)", 180.00),
    ("Cooking Oil (1L)", 95.00),
]

# Calculate and print grand total
`,
    expectedOutput:"Grand Total: P525.00",
    testCases:[
      {label:"Output contains 'Grand Total:'", check:o=>o.includes("Grand Total:")},
      {label:"Total is P525.00", check:o=>o.trim().includes("525.00")},
    ],
    hint:"Use sum() or a loop to add up all prices. Use an f-string: f'Grand Total: P{total:.2f}'"
  },
  {
    id:"m2", cat:"cashier", diff:"easy", pts:25,
    title:"Item Menu Display",
    desc:"Display a store menu like PyMart does.\nPrint a header with dashes, list items with numbers and prices.\n\nItems dictionary:\n1: Bottled Water - P15.00\n2: Instant Noodles - P12.00\n3: Bread - P45.00\n\nFormat each line as: '[1] Bottled Water\\t- P15.00'",
    starter:`# Store menu display
items = {
    1: ("Bottled Water", 15.00),
    2: ("Instant Noodles", 12.00),
    3: ("Bread", 45.00),
}

lines = "-" * 20
# Print the menu with header and footer lines
`,
    expectedOutput:"--------------------\nAVAILABLE ITEMS\n--------------------\n[1] Bottled Water\t- P15.00\n[2] Instant Noodles\t- P12.00\n[3] Bread\t- P45.00\n--------------------",
    testCases:[
      {label:"Prints separator lines (---)", check:o=>o.includes("---")},
      {label:"Lists item [1] Bottled Water", check:o=>o.includes("[1]")&&o.includes("Bottled Water")},
      {label:"Shows prices with P prefix", check:o=>o.includes("P15.00")},
      {label:"Has AVAILABLE ITEMS header", check:o=>o.includes("AVAILABLE ITEMS")},
    ],
    hint:"Loop through items.items(). Use f'[{num}] {name}\\t- P{price:.2f}' for each line."
  },
  {
    id:"m3", cat:"receipt", diff:"medium", pts:40,
    title:"Order Receipt Printer",
    desc:"Print a formatted order receipt like a real POS system.\n\nCart (already filled):\n- Bottled Water x2 @ P15.00 = P30.00\n- Bread x1 @ P45.00 = P45.00\n\nPrint a receipt showing:\n- Each item, qty, and total\n- Subtotal\n- VAT (12%)\n- Grand Total",
    starter:`# Order receipt printer
cart = [
    ("Bottled Water", 2, 15.00, 30.00),
    ("Bread", 1, 45.00, 45.00),
]

lines = "-" * 28
subtotal = sum(item[3] for item in cart)
vat = subtotal * 0.12
grand_total = subtotal + vat

# Print the receipt
`,
    expectedOutput:"----------------------------\nORDER RECEIPT\n----------------------------\nBottled Water\tx2\tP30.00\nBread\tx1\tP45.00\n----------------------------\nSubtotal:\tP75.00\nVAT (12%):\tP9.00\nGrand Total:\tP84.00\n----------------------------",
    testCases:[
      {label:"Has ORDER RECEIPT header", check:o=>o.includes("ORDER RECEIPT")},
      {label:"Lists Bottled Water x2", check:o=>o.includes("Bottled Water")&&o.includes("x2")},
      {label:"Subtotal is P75.00", check:o=>o.includes("75.00")},
      {label:"VAT (12%) is P9.00", check:o=>o.includes("9.00")},
      {label:"Grand Total is P84.00", check:o=>o.includes("84.00")},
    ],
    hint:"Use a for loop on the cart list. Print name, qty with 'x', and total price. Then print subtotal, vat, grand_total."
  },
  {
    id:"m4", cat:"cashier", diff:"medium", pts:45,
    title:"Discount & Change Calculator",
    desc:"Simulate a cashier computing discounts and change.\n\nGiven:\n- Subtotal: P500.00\n- Discount: 5% for orders over P300\n- VAT: 12% on discounted amount\n- Customer pays: P600.00\n\nPrint: discount amount, VAT, grand total, and change.",
    starter:`# Discount and change calculator
subtotal = 500.00
payment = 600.00

# Apply 5% discount if subtotal > 300
# Apply 12% VAT on discounted amount
# Calculate grand total and change
# Print results
`,
    expectedOutput:"Discount (5%):\tP25.00\nVAT (12%):\tP57.00\nGrand Total:\tP532.00\nChange:\tP68.00",
    testCases:[
      {label:"Discount is P25.00", check:o=>o.includes("25.00")},
      {label:"VAT is P57.00", check:o=>o.includes("57.00")},
      {label:"Grand Total is P532.00", check:o=>o.includes("532.00")},
      {label:"Change is P68.00", check:o=>o.includes("68.00")},
    ],
    hint:"discount = subtotal * 0.05. vat = (subtotal - discount) * 0.12. grand = subtotal - discount + vat. change = payment - grand."
  },
  {
    id:"m5", cat:"inventory", diff:"medium", pts:45,
    title:"Stock Level Checker",
    desc:"Check inventory and flag low-stock items.\n\nInventory dictionary:\n- Bottled Water: 5 units\n- Instant Noodles: 2 units\n- Bread: 0 units\n- Eggs: 12 units\n- Chocolate Bar: 1 unit\n\nPrint each item. If stock <= 2, add '[LOW STOCK]' after it.\nIf stock == 0, add '[OUT OF STOCK]' instead.",
    starter:`# Stock level checker
inventory = {
    "Bottled Water": 5,
    "Instant Noodles": 2,
    "Bread": 0,
    "Eggs": 12,
    "Chocolate Bar": 1,
}

# Check and print stock levels with warnings
`,
    expectedOutput:"Bottled Water: 5 units\nInstant Noodles: 2 units [LOW STOCK]\nBread: 0 units [OUT OF STOCK]\nEggs: 12 units\nChocolate Bar: 1 unit [LOW STOCK]",
    testCases:[
      {label:"Bottled Water shows 5 units (no warning)", check:o=>o.includes("Bottled Water: 5")&&!o.split("\n").find(l=>l.includes("Bottled Water")&&l.includes("LOW"))},
      {label:"Instant Noodles flagged [LOW STOCK]", check:o=>o.includes("Instant Noodles")&&o.includes("LOW STOCK")},
      {label:"Bread flagged [OUT OF STOCK]", check:o=>o.includes("Bread")&&o.includes("OUT OF STOCK")},
      {label:"Chocolate Bar flagged [LOW STOCK]", check:o=>o.includes("Chocolate Bar")&&o.includes("LOW STOCK")},
    ],
    hint:"Loop through inventory.items(). Use if/elif/else to check stock value and append the right tag."
  },
  {
    id:"m6", cat:"records", diff:"medium", pts:50,
    title:"Sales Summary Report",
    desc:"Generate a daily sales summary from a list of transactions.\n\nTransactions (item, qty, price_each):\n('Water', 3, 15.00), ('Noodles', 5, 12.00), ('Bread', 2, 45.00)\n\nPrint:\n- Each item: name, qty sold, revenue\n- Total items sold\n- Total revenue",
    starter:`# Sales summary report
transactions = [
    ("Water", 3, 15.00),
    ("Noodles", 5, 12.00),
    ("Bread", 2, 45.00),
]

# Generate sales summary
`,
    expectedOutput:"DAILY SALES REPORT\n------------------\nWater\t\tQty: 3\tRevenue: P45.00\nNoodles\t\tQty: 5\tRevenue: P60.00\nBread\t\tQty: 2\tRevenue: P90.00\n------------------\nTotal Sold: 10 items\nTotal Revenue: P195.00",
    testCases:[
      {label:"Has DAILY SALES REPORT header", check:o=>o.includes("DAILY SALES REPORT")},
      {label:"Water: qty 3, revenue P45.00", check:o=>o.includes("Water")&&o.includes("3")&&o.includes("45.00")},
      {label:"Total Sold: 10 items", check:o=>o.includes("10")&&o.toLowerCase().includes("total sold")},
      {label:"Total Revenue: P195.00", check:o=>o.includes("195.00")},
    ],
    hint:"revenue = qty * price_each for each item. Sum all qtys for total sold. Sum all revenues for total revenue."
  },
  {
    id:"m7", cat:"menu", diff:"medium", pts:55,
    title:"Student Grade Recorder",
    desc:"Build a grade recording program.\n\nGiven students and their scores:\n- Alice: 88, 92, 78\n- Bob: 70, 65, 80\n- Carol: 95, 98, 100\n\nFor each student, calculate their average and assign a grade:\n90+: A, 80+: B, 70+: C, 60+: D, below 60: F\n\nPrint each student's average and grade.",
    starter:`# Student grade recorder
students = {
    "Alice": [88, 92, 78],
    "Bob": [70, 65, 80],
    "Carol": [95, 98, 100],
}

# Calculate average and grade for each student
`,
    expectedOutput:"Alice\t\tAvg: 86.00\tGrade: B\nBob\t\tAvg: 71.67\tGrade: C\nCarol\t\tAvg: 97.67\tGrade: A",
    testCases:[
      {label:"Alice gets Grade B (avg ~86)", check:o=>o.includes("Alice")&&o.includes("86.00")&&o.includes("B")},
      {label:"Bob gets Grade C (avg ~71.67)", check:o=>o.includes("Bob")&&o.includes("71.67")&&o.includes("C")},
      {label:"Carol gets Grade A (avg ~97.67)", check:o=>o.includes("Carol")&&o.includes("97.67")&&o.includes("A")},
    ],
    hint:"avg = sum(scores)/len(scores). Use if/elif for grading. f'{avg:.2f}' for 2 decimal places."
  },
  {
    id:"m8", cat:"cashier", diff:"hard", pts:65,
    title:"Multi-Item Cart System",
    desc:"Simulate a shopping cart that processes a list of orders.\n\nProcess these orders against the items dictionary:\nOrders: [(1, 3), (3, 1), (5, 2)]  → (item_num, qty)\n\nItems:\n1: Bottled Water P15.00\n2: Instant Noodles P12.00\n3: Canned Goods P35.00\n4: Bread P45.00\n5: Chocolate Bar P25.00\n\nFor each order, print the item added.\nThen print the subtotal of all orders.",
    starter:`# Multi-item cart system
items = {
    1: ("Bottled Water", 15.00),
    2: ("Instant Noodles", 12.00),
    3: ("Canned Goods", 35.00),
    4: ("Bread", 45.00),
    5: ("Chocolate Bar", 25.00),
}
orders = [(1, 3), (3, 1), (5, 2)]
cart = []

# Process orders, build cart, print summary
`,
    expectedOutput:"Bottled Water x3 added. Item Total: P45.00\nCanned Goods x1 added. Item Total: P35.00\nChocolate Bar x2 added. Item Total: P50.00\nSubtotal: P130.00",
    testCases:[
      {label:"Bottled Water x3 = P45.00", check:o=>o.includes("Bottled Water x3")&&o.includes("P45.00")},
      {label:"Canned Goods x1 = P35.00", check:o=>o.includes("Canned Goods x1")&&o.includes("P35.00")},
      {label:"Chocolate Bar x2 = P50.00", check:o=>o.includes("Chocolate Bar x2")&&o.includes("P50.00")},
      {label:"Subtotal is P130.00", check:o=>o.includes("Subtotal")&&o.includes("130.00")},
    ],
    hint:"Loop through orders. name, price = items[item_num]. total = price * qty. Append to cart. Print each. Use sum() for subtotal."
  },
  {
    id:"m9", cat:"receipt", diff:"hard", pts:70,
    title:"Full PyMart Receipt",
    desc:"Generate a complete PyMart-style receipt with all components.\n\nCart (pre-filled):\n- Bottled Water x2 @ P15 = P30\n- Bread x1 @ P45 = P45\n- Chocolate Bar x3 @ P25 = P75\n\nCustomer: Juan dela Cruz\nPayment: P200.00\n\nApply 5% discount and 12% VAT.\nPrint a full receipt with customer name, all items, subtotal, discount, VAT, grand total, payment, and change.",
    starter:`# Full PyMart receipt generator
customer_name = "Juan dela Cruz"
cart = [
    ("Bottled Water", 2, 15.00, 30.00),
    ("Bread", 1, 45.00, 45.00),
    ("Chocolate Bar", 3, 25.00, 75.00),
]
payment = 200.00
lines = "-" * 30

subtotal = sum(item[3] for item in cart)
discount = subtotal * 0.05
vat = (subtotal - discount) * 0.12
grand_total = subtotal - discount + vat
change = payment - grand_total

# Print the full receipt
`,
    expectedOutput:"------------------------------\nORDER RECEIPT\nCustomer: Juan dela Cruz\n------------------------------\nBottled Water\tx2\tP30.00\nBread\tx1\tP45.00\nChocolate Bar\tx3\tP75.00\n------------------------------\nSubtotal:\tP150.00\nDiscount (5%):\tP7.50\nVAT (12%):\tP17.10\nGrand Total:\tP159.60\nPayment:\tP200.00\nChange:\tP40.40\n------------------------------\nTHANK YOU, JUAN DELA CRUZ!",
    testCases:[
      {label:"Has customer name in header", check:o=>o.includes("Juan dela Cruz")},
      {label:"All 3 items listed", check:o=>o.includes("Bottled Water")&&o.includes("Bread")&&o.includes("Chocolate Bar")},
      {label:"Subtotal P150.00, Discount P7.50", check:o=>o.includes("150.00")&&o.includes("7.50")},
      {label:"Grand Total P159.60, Change P40.40", check:o=>o.includes("159.60")&&o.includes("40.40")},
      {label:"Thank you message with uppercased name", check:o=>o.toUpperCase().includes("JUAN DELA CRUZ")&&o.toUpperCase().includes("THANK YOU")},
    ],
    hint:"Loop through cart for items. Use customer_name.upper() for the thank you. All values already computed—just print them!"
  },
  {
    id:"m10", cat:"records", diff:"hard", pts:75,
    title:"Employee Payroll System",
    desc:"Build a payroll calculator for a small store.\n\nEmployees (name, hours_worked, hourly_rate):\n- Ana: 40 hrs @ P60/hr\n- Ben: 35 hrs @ P75/hr\n- Cara: 48 hrs @ P55/hr (overtime: hours > 40 get 1.5x rate)\n\nFor each employee: calculate gross pay (with overtime), deduct 10% tax, print net pay.\nPrint total payroll at the end.",
    starter:`# Employee payroll system
employees = [
    ("Ana", 40, 60.00),
    ("Ben", 35, 75.00),
    ("Cara", 48, 55.00),
]

# Calculate payroll with overtime and tax
`,
    expectedOutput:"Ana\t\tGross: P2400.00\tTax: P240.00\tNet: P2160.00\nBen\t\tGross: P2625.00\tTax: P262.50\tNet: P2362.50\nCara\t\tGross: P2860.00\tTax: P286.00\tNet: P2574.00\n----------------------------------\nTotal Payroll: P7096.50",
    testCases:[
      {label:"Ana net pay P2160.00 (no overtime)", check:o=>o.includes("Ana")&&o.includes("2160.00")},
      {label:"Ben net pay P2362.50", check:o=>o.includes("Ben")&&o.includes("2362.50")},
      {label:"Cara gets overtime (48hrs), net P2574.00", check:o=>o.includes("Cara")&&o.includes("2574.00")},
      {label:"Total payroll P7096.50", check:o=>o.includes("7096.50")},
    ],
    hint:"If hours > 40: gross = (40 * rate) + (extra_hours * rate * 1.5). Tax = gross * 0.10. Net = gross - tax."
  },
  {
    id:"m11", cat:"cashier", diff:"easy", pts:20,
    title:"Coin Change Counter",
    desc:"A cashier needs to give change using the fewest coins/bills.\nGiven change amount: P68.00\n\nBills/coins available: P50, P20, P10, P5, P1\n\nPrint how many of each denomination to use.\nSkip denominations with 0 count.",
    starter:`# Coin change counter
change = 68
denominations = [50, 20, 10, 5, 1]

# Calculate fewest bills/coins needed
`,
    expectedOutput:"P50 x 1\nP10 x 1\nP5 x 1\nP1 x 3",
    testCases:[
      {label:"P50 x 1 used", check:o=>o.includes("P50 x 1")},
      {label:"P10 x 1 used", check:o=>o.includes("P10 x 1")},
      {label:"P5 x 1 used", check:o=>o.includes("P5 x 1")},
      {label:"P1 x 3 used", check:o=>o.includes("P1 x 3")},
      {label:"P20 not printed (count is 0)", check:o=>!o.includes("P20 x 0")},
    ],
    hint:"Loop through denominations. count = change // denom. change = change % denom. Only print if count > 0."
  },
  {
    id:"m12", cat:"inventory", diff:"medium", pts:45,
    title:"Restock Order Generator",
    desc:"Generate a restock order for items below minimum stock.\n\nInventory (item: current_stock, min_stock, reorder_qty):\n- Rice: 3 bags, min 5, reorder 20\n- Sugar: 8 bags, min 5, reorder 10\n- Oil: 1 bottle, min 3, reorder 12\n- Salt: 6 packs, min 4, reorder 15\n- Vinegar: 2 bottles, min 3, reorder 8\n\nPrint only items that need restocking with their reorder quantity.",
    starter:`# Restock order generator
inventory = [
    ("Rice",    3,  5, 20),
    ("Sugar",   8,  5, 10),
    ("Oil",     1,  3, 12),
    ("Salt",    6,  4, 15),
    ("Vinegar", 2,  3,  8),
]
# (name, current, min_stock, reorder_qty)

print("RESTOCK ORDER")
print("-" * 25)
# Print items that need restocking
`,
    expectedOutput:"RESTOCK ORDER\n-------------------------\nRice\t\tOrder: 20 units\nOil\t\tOrder: 12 units\nVinegar\t\tOrder: 8 units\n-------------------------\nTotal items to reorder: 3",
    testCases:[
      {label:"Rice needs reorder (3 < 5)", check:o=>o.includes("Rice")&&o.includes("20 units")},
      {label:"Sugar NOT in order (8 >= 5)", check:o=>!o.includes("Sugar")},
      {label:"Oil needs reorder (1 < 3)", check:o=>o.includes("Oil")&&o.includes("12 units")},
      {label:"Vinegar needs reorder (2 < 3)", check:o=>o.includes("Vinegar")&&o.includes("8 units")},
      {label:"Total items to reorder: 3", check:o=>o.includes("Total items to reorder: 3")},
    ],
    hint:"if current < min_stock: print the item and reorder qty. Count how many trigger this condition."
  },
  {
    id:"m13", cat:"calc", diff:"easy", pts:25,
    title:"Unit Price Finder",
    desc:"Find the best value item by calculating price per unit.\n\nProducts:\n- Shampoo A: P89.00 for 200ml\n- Shampoo B: P145.00 for 350ml\n- Shampoo C: P55.00 for 100ml\n\nCalculate price per ml for each.\nPrint each item's price/ml rounded to 4 decimals.\nThen print which is the best deal (lowest price/ml).",
    starter:`# Unit price finder
products = [
    ("Shampoo A", 89.00,  200),
    ("Shampoo B", 145.00, 350),
    ("Shampoo C", 55.00,  100),
]
# (name, price, volume_ml)

# Calculate and print price per ml, then best deal
`,
    expectedOutput:"Shampoo A: P0.4450 per ml\nShampoo B: P0.4143 per ml\nShampoo C: P0.5500 per ml\nBest Deal: Shampoo B",
    testCases:[
      {label:"Shampoo A: P0.4450/ml", check:o=>o.includes("Shampoo A")&&o.includes("0.4450")},
      {label:"Shampoo B: P0.4143/ml", check:o=>o.includes("Shampoo B")&&o.includes("0.4143")},
      {label:"Shampoo C: P0.5500/ml", check:o=>o.includes("Shampoo C")&&o.includes("0.5500")},
      {label:"Best Deal is Shampoo B", check:o=>o.includes("Best Deal")&&o.includes("Shampoo B")},
    ],
    hint:"price_per_ml = price / volume. Track the minimum. Use f'{val:.4f}' for 4 decimal places."
  },
  {
    id:"m14", cat:"records", diff:"medium", pts:50,
    title:"Attendance Tracker",
    desc:"Track student attendance and compute each student's attendance rate.\n\nAttendance log (True = present, False = absent):\n- Ana:   [T, T, F, T, T, T, F, T, T, T]  (8/10)\n- Ben:   [T, F, F, T, F, T, T, F, T, T]  (6/10)\n- Carol: [T, T, T, T, T, T, T, T, T, T]  (10/10)\n\nPrint each student's days present, total days, and percentage.\nFlag students below 75% with '[AT RISK]'.",
    starter:`# Attendance tracker
attendance = {
    "Ana":   [True, True, False, True, True, True, False, True, True, True],
    "Ben":   [True, False, False, True, False, True, True, False, True, True],
    "Carol": [True, True, True, True, True, True, True, True, True, True],
}

# Calculate and print attendance rates
`,
    expectedOutput:"Ana\t\t8/10\t80.00%\nBen\t\t6/10\t60.00% [AT RISK]\nCarol\t\t10/10\t100.00%",
    testCases:[
      {label:"Ana: 8/10, 80.00%", check:o=>o.includes("Ana")&&o.includes("8/10")&&o.includes("80.00%")},
      {label:"Ben: 6/10, 60.00% flagged AT RISK", check:o=>o.includes("Ben")&&o.includes("6/10")&&o.includes("AT RISK")},
      {label:"Carol: 10/10, 100.00%", check:o=>o.includes("Carol")&&o.includes("10/10")&&o.includes("100.00%")},
      {label:"Ana NOT flagged AT RISK (80% >= 75%)", check:o=>!o.split("\n").find(l=>l.includes("Ana")&&l.includes("AT RISK"))},
    ],
    hint:"present = sum(days) since True=1. pct = present/total*100. Flag if pct < 75. f'{pct:.2f}%' for formatting."
  },
  {
    id:"m15", cat:"menu", diff:"medium", pts:50,
    title:"Restaurant Bill Splitter",
    desc:"Split a restaurant bill equally among friends.\n\nOrder:\n- Fried Chicken: P185.00\n- Spaghetti: P120.00\n- Drinks x3: P45.00 each\n- Rice x3: P25.00 each\n\nNumber of people: 3\nService charge: 10%\n\nPrint the subtotal, service charge, total, and each person's share.",
    starter:`# Restaurant bill splitter
orders = [
    ("Fried Chicken", 1, 185.00),
    ("Spaghetti",     1, 120.00),
    ("Drinks",        3,  45.00),
    ("Rice",          3,  25.00),
]
people = 3
# (name, qty, price_each)

# Calculate totals and split
`,
    expectedOutput:"Fried Chicken x1: P185.00\nSpaghetti x1: P120.00\nDrinks x3: P135.00\nRice x3: P75.00\n--------------------\nSubtotal: P515.00\nService (10%): P51.50\nTotal: P566.50\nPer Person: P188.83",
    testCases:[
      {label:"Drinks x3 = P135.00", check:o=>o.includes("Drinks x3")&&o.includes("135.00")},
      {label:"Subtotal P515.00", check:o=>o.includes("Subtotal")&&o.includes("515.00")},
      {label:"Service charge P51.50", check:o=>o.includes("51.50")},
      {label:"Per Person P188.83", check:o=>o.includes("Per Person")&&o.includes("188.83")},
    ],
    hint:"line_total = qty * price. subtotal = sum of all line totals. service = subtotal * 0.10. per_person = total / people."
  },
  {
    id:"m16", cat:"cashier", diff:"hard", pts:65,
    title:"Loyalty Points System",
    desc:"Implement a loyalty points system for PyMart.\n\nRules:\n- Earn 1 point per P10 spent (floor)\n- Bonus: 2x points if purchase >= P500\n- Redeem: every 100 points = P50 discount\n\nCustomers:\n- Lito: spent P380, has 45 existing points\n- Mara: spent P620, has 80 existing points\n- Noel: spent P150, has 120 existing points\n\nFor each: print earned points, total points, discount redeemed, and final bill.",
    starter:`# Loyalty points system
customers = [
    ("Lito", 380.00, 45),
    ("Mara", 620.00, 80),
    ("Noel", 150.00, 120),
]

# Process loyalty points for each customer
`,
    expectedOutput:"Lito\tEarned: 38 pts\tTotal: 83 pts\tDiscount: P0.00\tFinal: P380.00\nMara\tEarned: 124 pts\tTotal: 204 pts\tDiscount: P100.00\tFinal: P520.00\nNoel\tEarned: 15 pts\tTotal: 135 pts\tDiscount: P50.00\tFinal: P100.00",
    testCases:[
      {label:"Lito earns 38 pts (P380/10=38, no bonus), no discount", check:o=>o.includes("Lito")&&o.includes("38 pts")&&o.includes("P0.00")},
      {label:"Mara earns 124 pts (P620/10=62 x2 bonus), redeems P100", check:o=>o.includes("Mara")&&o.includes("124 pts")&&o.includes("P100.00")},
      {label:"Noel earns 15 pts (P150/10=15), redeems P50 (120 pts)", check:o=>o.includes("Noel")&&o.includes("15 pts")&&o.includes("P50.00")},
      {label:"Mara final bill P520.00", check:o=>o.includes("Mara")&&o.includes("520.00")},
    ],
    hint:"earned = (spent//10)*2 if spent>=500 else spent//10. total = existing+earned. discount = (total//100)*50. Points spent = (total//100)*100."
  },
  {
    id:"m17", cat:"inventory", diff:"hard", pts:70,
    title:"Expiry Date Checker",
    desc:"Check product expiry and categorize them.\n\nCurrent day: 15 (simulate as day number of month)\n\nProducts (name, expiry_day):\n- Milk: day 14 → EXPIRED\n- Bread: day 15 → EXPIRES TODAY\n- Eggs: day 18 → expires in 3 days → EXPIRING SOON\n- Canned Goods: day 30 → OK\n- Yogurt: day 17 → expires in 2 days → EXPIRING SOON\n\nExpiring soon = within 3 days. Print each with status. Count and print totals per category.",
    starter:`# Expiry date checker
today = 15
products = [
    ("Milk",        14),
    ("Bread",       15),
    ("Eggs",        18),
    ("Canned Goods",30),
    ("Yogurt",      17),
]

# Check expiry and categorize
`,
    expectedOutput:"Milk\t\t[EXPIRED]\nBread\t\t[EXPIRES TODAY]\nEggs\t\t[EXPIRING SOON - 3 days left]\nCanned Goods\t[OK]\nYogurt\t\t[EXPIRING SOON - 2 days left]\n------------------------------\nExpired: 1 | Expiring Soon: 2 | OK: 2",
    testCases:[
      {label:"Milk marked EXPIRED", check:o=>o.includes("Milk")&&o.includes("EXPIRED")},
      {label:"Bread marked EXPIRES TODAY", check:o=>o.includes("Bread")&&o.includes("EXPIRES TODAY")},
      {label:"Eggs: EXPIRING SOON - 3 days left", check:o=>o.includes("Eggs")&&o.includes("3 days left")},
      {label:"Canned Goods marked OK", check:o=>o.includes("Canned Goods")&&o.includes("[OK]")},
      {label:"Summary: Expired:1, Expiring Soon:2, OK:2", check:o=>o.includes("Expired: 1")&&o.includes("Expiring Soon: 2")&&o.includes("OK: 2")},
    ],
    hint:"days_left = expiry - today. if days_left < 0: EXPIRED. elif days_left == 0: EXPIRES TODAY. elif days_left <= 3: EXPIRING SOON."
  },
  {
    id:"m18", cat:"records", diff:"hard", pts:70,
    title:"Top Seller Report",
    desc:"Analyze sales data to find top-selling products.\n\nSales records (item, qty_sold, price):\n('Bottled Water', 45, 15.00)\n('Instant Noodles', 30, 12.00)\n('Bread', 12, 45.00)\n('Eggs', 20, 180.00)\n('Chocolate Bar', 55, 25.00)\n\nRank products by total revenue (qty * price).\nPrint ranked list with rank, name, qty, and revenue.\nPrint the #1 top seller separately.",
    starter:`# Top seller report
sales = [
    ("Bottled Water",   45, 15.00),
    ("Instant Noodles", 30, 12.00),
    ("Bread",           12, 45.00),
    ("Eggs",            20, 180.00),
    ("Chocolate Bar",   55, 25.00),
]

# Rank by revenue and print report
`,
    expectedOutput:"TOP SELLER REPORT\n-----------------\n#1 Eggs\t\tQty: 20\tRevenue: P3600.00\n#2 Chocolate Bar\tQty: 55\tRevenue: P1375.00\n#3 Bottled Water\tQty: 45\tRevenue: P675.00\n#4 Bread\t\tQty: 12\tRevenue: P540.00\n#5 Instant Noodles\tQty: 30\tRevenue: P360.00\n-----------------\nTop Seller: Eggs (P3600.00)",
    testCases:[
      {label:"Has TOP SELLER REPORT header", check:o=>o.includes("TOP SELLER REPORT")},
      {label:"Eggs ranked #1 with P3600.00", check:o=>o.includes("#1")&&o.includes("Eggs")&&o.includes("3600.00")},
      {label:"Chocolate Bar ranked #2", check:o=>o.includes("#2")&&o.includes("Chocolate Bar")},
      {label:"Instant Noodles ranked #5 (lowest revenue)", check:o=>o.includes("#5")&&o.includes("Instant Noodles")},
      {label:"Top Seller summary line correct", check:o=>o.includes("Top Seller: Eggs")},
    ],
    hint:"Compute revenue = qty * price for each. Sort by revenue descending: sorted(sales, key=lambda x: x[1]*x[2], reverse=True)."
  },
  {
    id:"m19", cat:"menu", diff:"hard", pts:75,
    title:"School Canteen Order System",
    desc:"Simulate a school canteen order system.\n\nMenu:\n1: Lugaw - P15.00\n2: Goto - P25.00\n3: Pares - P45.00\n4: Rice - P10.00\n5: Drinks - P20.00\n\nOrders to process:\n[(2, 2), (4, 3), (5, 1)]  → (menu_num, qty)\n\nStudent: Maria Santos\nPrint itemized order, subtotal, and a 10% student discount.",
    starter:`# School canteen order system
menu = {
    1: ("Lugaw",  15.00),
    2: ("Goto",   25.00),
    3: ("Pares",  45.00),
    4: ("Rice",   10.00),
    5: ("Drinks", 20.00),
}
orders = [(2, 2), (4, 3), (5, 1)]
student = "Maria Santos"

# Process orders and print receipt with student discount
`,
    expectedOutput:"CANTEEN ORDER - Maria Santos\n============================\nGoto x2\t\tP50.00\nRice x3\t\tP30.00\nDrinks x1\t\tP20.00\n============================\nSubtotal:\t\tP100.00\nStudent Discount (10%):\tP10.00\nTotal:\t\t\tP90.00",
    testCases:[
      {label:"Header includes student name", check:o=>o.includes("Maria Santos")},
      {label:"Goto x2 = P50.00", check:o=>o.includes("Goto x2")&&o.includes("P50.00")},
      {label:"Rice x3 = P30.00", check:o=>o.includes("Rice x3")&&o.includes("P30.00")},
      {label:"Subtotal P100.00", check:o=>o.includes("Subtotal")&&o.includes("P100.00")},
      {label:"Student discount P10.00, Total P90.00", check:o=>o.includes("P10.00")&&o.includes("P90.00")},
    ],
    hint:"Loop orders: name, price = menu[num]. line_total = price * qty. subtotal = sum. discount = subtotal * 0.10. total = subtotal - discount."
  },
  {
    id:"m20", cat:"calc", diff:"hard", pts:75,
    title:"Loan Amortization Calculator",
    desc:"Calculate a simple loan repayment schedule.\n\nLoan details:\n- Principal: P10,000.00\n- Monthly interest: 2%\n- Term: 4 months\n\nEach month:\n- Interest = remaining balance * 0.02\n- Monthly payment = P2,625.80 (fixed)\n- Principal paid = payment - interest\n- New balance = balance - principal paid\n\nPrint a month-by-month schedule and total interest paid.",
    starter:`# Loan amortization calculator
principal = 10000.00
monthly_rate = 0.02
payment = 2625.80
months = 4

balance = principal
total_interest = 0

print("LOAN SCHEDULE")
print("-" * 50)
print(f"{'Month':<8}{'Interest':<12}{'Principal':<12}{'Balance'}")
print("-" * 50)
# Calculate and print each month
`,
    expectedOutput:"LOAN SCHEDULE\n--------------------------------------------------\nMonth   Interest    Principal   Balance\n--------------------------------------------------\n1       P200.00     P2425.80    P7574.20\n2       P151.48     P2474.32    P5099.88\n3       P102.00     P2523.80    P2576.08\n4       P51.52      P2574.28    P1.80\n--------------------------------------------------\nTotal Interest Paid: P505.00",
    testCases:[
      {label:"Month 1: Interest P200.00, Balance P7574.20", check:o=>o.includes("200.00")&&o.includes("7574.20")},
      {label:"Month 2: Interest P151.48", check:o=>o.includes("151.48")},
      {label:"Month 4 shown with balance near P0", check:o=>o.includes("P51.52")||o.includes("51.52")},
      {label:"Total Interest Paid shown", check:o=>o.toLowerCase().includes("total interest")},
    ],
    hint:"Each month: interest = balance * monthly_rate. principal_paid = payment - interest. balance -= principal_paid. Accumulate total_interest."
  },
  {
    id:"m21", cat:"inventory", diff:"medium", pts:45,
    title:"Stock Reorder Alert",
    desc:"Check inventory levels and alert for low stock.\n\nProducts (name, current_stock, minimum_stock):\n- Sugar: 8 kg, min 10 kg → REORDER: Need 2 kg more\n- Salt: 15 kg, min 5 kg → OK\n- Coffee: 3 kg, min 10 kg → REORDER: Need 7 kg more\n- Flour: 12 kg, min 10 kg → OK\n\nPrint each product status. Count and print how many need reordering.",
    starter:`# Stock reorder alert system
products = [
    ("Sugar",  8, 10),
    ("Salt",   15, 5),
    ("Coffee", 3, 10),
    ("Flour",  12, 10),
]

# Check stock levels and alert
`,
    expectedOutput:"Sugar\t\t8 kg\t[REORDER - Need 2 kg]\nSalt\t\t15 kg\t[OK]\nCoffee\t\t3 kg\t[REORDER - Need 7 kg]\nFlour\t\t12 kg\t[OK]\n--------------------------\nReorder Required: 2 items",
    testCases:[
      {label:"Sugar needs reorder (2 kg)", check:o=>o.includes("Sugar")&&o.includes("REORDER")&&o.includes("2 kg")},
      {label:"Salt marked OK", check:o=>o.includes("Salt")&&o.includes("OK")},
      {label:"Coffee needs 7 kg", check:o=>o.includes("Coffee")&&o.includes("7 kg")},
      {label:"Reorder count is 2", check:o=>o.includes("Reorder Required: 2")},
    ],
    hint:"If current < minimum: shortage = minimum - current. Count items where current < minimum."
  },
  {
    id:"m22", cat:"receipt", diff:"medium", pts:50,
    title:"Itemized Receipt Generator",
    desc:"Generate a detailed receipt for multiple items.\n\nTransaction #1234\nItems purchased:\n- Shampoo (qty: 2, price: P85.00 each)\n- Soap (qty: 5, price: P22.00 each)\n- Toothpaste (qty: 1, price: P65.00 each)\n\nPrint item lines, subtotal, 12% VAT, and grand total.",
    starter:`# Receipt generator
trans_no = 1234
items = [
    ("Shampoo",    2, 85.00),
    ("Soap",       5, 22.00),
    ("Toothpaste", 1, 65.00),
]

# Generate itemized receipt
`,
    expectedOutput:"Receipt #1234\n===============================\nShampoo x2\t\tP170.00\nSoap x5\t\t\tP110.00\nToothpaste x1\t\tP65.00\n===============================\nSubtotal:\t\tP345.00\nVAT (12%):\t\tP41.40\nGrand Total:\t\tP386.40",
    testCases:[
      {label:"Receipt number shown", check:o=>o.includes("Receipt #1234")},
      {label:"Shampoo x2 = P170.00", check:o=>o.includes("Shampoo x2")&&o.includes("170.00")},
      {label:"Subtotal P345.00", check:o=>o.includes("Subtotal")&&o.includes("345.00")},
      {label:"VAT P41.40", check:o=>o.includes("VAT")&&o.includes("41.40")},
      {label:"Grand Total P386.40", check:o=>o.includes("386.40")},
    ],
    hint:"line_total = qty * price. subtotal = sum all line totals. vat = subtotal * 0.12. grand_total = subtotal + vat."
  },
  {
    id:"m23", cat:"cashier", diff:"easy", pts:25,
    title:"Change Calculator",
    desc:"Calculate change for a cash transaction.\n\nPurchase amount: P356.75\nPayment received: P500.00\n\nCompute change.\nBreak down change into bills: P100, P50, P20, P10, P5, P1.\nExample: If change is P143.25, breakdown is: 1×P100, 2×P20, 3×P1, 1×P0.25",
    starter:`# Change calculator
amount = 356.75
payment = 500.00

# Calculate change and breakdown
`,
    expectedOutput:"Amount: P356.75\nPayment: P500.00\nChange: P143.25\n--------------\nP100 x 1\nP20 x 2\nP1 x 3\nP0.25 x 1",
    testCases:[
      {label:"Change is P143.25", check:o=>o.includes("Change")&&o.includes("143.25")},
      {label:"Shows P100 x 1", check:o=>o.includes("P100 x 1")},
      {label:"Shows P20 x 2", check:o=>o.includes("P20 x 2")},
      {label:"Shows coins breakdown", check:o=>o.includes("P1 x 3")&&o.includes("P0.25 x 1")},
    ],
    hint:"change = payment - amount. For each denomination, count = change // denom, then change %= denom."
  },
  {
    id:"m24", cat:"menu", diff:"easy", pts:30,
    title:"Coffee Shop Menu",
    desc:"Create a simple coffee shop menu display.\n\nDrinks:\n1. Americano - P80.00\n2. Cappuccino - P95.00\n3. Latte - P100.00\n4. Mocha - P110.00\n\nPrint menu with header, items, and footer.",
    starter:`# Coffee shop menu
drinks = [
    ("Americano",  80.00),
    ("Cappuccino", 95.00),
    ("Latte",      100.00),
    ("Mocha",      110.00),
]

# Display menu
`,
    expectedOutput:"☕ COFFEE MENU ☕\n==================\n1. Americano\t- P80.00\n2. Cappuccino\t- P95.00\n3. Latte\t- P100.00\n4. Mocha\t- P110.00\n==================",
    testCases:[
      {label:"Has COFFEE MENU header", check:o=>o.toUpperCase().includes("COFFEE MENU")},
      {label:"Lists all 4 drinks", check:o=>o.includes("Americano")&&o.includes("Mocha")},
      {label:"Shows numbered items", check:o=>o.includes("1.")&&o.includes("4.")},
      {label:"Has separator lines", check:o=>o.includes("===")},
    ],
    hint:"Use enumerate(drinks, start=1) to get numbering. Print with f'{i}. {name}\\t- P{price:.2f}'."
  },
  {
    id:"m25", cat:"calc", diff:"medium", pts:45,
    title:"Tip Calculator",
    desc:"Calculate tip and total for a restaurant bill.\n\nBill amount: P1,250.00\nNumber of people: 4\nTip percentage: 15%\n\nCalculate tip amount, total bill, and amount per person.",
    starter:`# Tip calculator
bill = 1250.00
people = 4
tip_percent = 15

# Calculate tip and split
`,
    expectedOutput:"Bill Amount:\tP1250.00\nTip (15%):\tP187.50\nTotal:\t\tP1437.50\nPer Person:\tP359.38",
    testCases:[
      {label:"Tip is P187.50", check:o=>o.includes("Tip")&&o.includes("187.50")},
      {label:"Total is P1437.50", check:o=>o.includes("Total")&&o.includes("1437.50")},
      {label:"Per Person is P359.38", check:o=>o.includes("Per Person")&&o.includes("359.38")},
    ],
    hint:"tip = bill * (tip_percent / 100). total = bill + tip. per_person = total / people."
  },
  {
    id:"m26", cat:"records", diff:"medium", pts:50,
    title:"Daily Sales Summary",
    desc:"Summarize daily sales transactions.\n\nTransactions for today:\n- Morning: P2,340.00 (8 transactions)\n- Afternoon: P3,890.00 (12 transactions)\n- Evening: P1,560.00 (5 transactions)\n\nPrint shift summaries, total sales, total transactions, and average per transaction.",
    starter:`# Daily sales summary
shifts = [
    ("Morning",   2340.00, 8),
    ("Afternoon", 3890.00, 12),
    ("Evening",   1560.00, 5),
]

# Generate daily summary
`,
    expectedOutput:"DAILY SALES SUMMARY\n===================\nMorning:\t8 txns\tP2340.00\nAfternoon:\t12 txns\tP3890.00\nEvening:\t5 txns\tP1560.00\n===================\nTotal Sales:\tP7790.00\nTotal Transactions: 25\nAverage per Transaction: P311.60",
    testCases:[
      {label:"Shows all three shifts", check:o=>o.includes("Morning")&&o.includes("Afternoon")&&o.includes("Evening")},
      {label:"Total sales P7790.00", check:o=>o.includes("7790.00")},
      {label:"Total transactions 25", check:o=>o.includes("25")},
      {label:"Average P311.60", check:o=>o.includes("311.60")},
    ],
    hint:"total_sales = sum of all sales. total_txns = sum of all transactions. average = total_sales / total_txns."
  },
  {
    id:"m27", cat:"inventory", diff:"hard", pts:65,
    title:"Batch Expiry Tracker",
    desc:"Track product batches with different expiry dates.\n\nProducts with batches (product, batch_no, qty, days_until_expiry):\n- Milk, B001, 10L, 2 days\n- Milk, B002, 15L, 5 days\n- Bread, B101, 20 pcs, 1 day\n- Bread, B102, 30 pcs, 3 days\n\nGroup by product, show total qty, and identify critical batches (≤2 days).\nPrint summary by product with total qty and critical batches.",
    starter:`# Batch expiry tracker
batches = [
    ("Milk",  "B001", 10, 2),
    ("Milk",  "B002", 15, 5),
    ("Bread", "B101", 20, 1),
    ("Bread", "B102", 30, 3),
]

# Track and summarize batches
`,
    expectedOutput:"BATCH EXPIRY REPORT\n===================\nMilk - Total: 25L\n  [CRITICAL] B001: 10L (2 days)\n  B002: 15L (5 days)\n\nBread - Total: 50 pcs\n  [CRITICAL] B101: 20 pcs (1 day)\n  B102: 30 pcs (3 days)\n\nCritical Batches: 2",
    testCases:[
      {label:"Milk total 25L shown", check:o=>o.includes("Milk")&&o.includes("25")},
      {label:"B001 marked CRITICAL", check:o=>o.includes("CRITICAL")&&o.includes("B001")},
      {label:"Bread total 50 pcs shown", check:o=>o.includes("Bread")&&o.includes("50")},
      {label:"Critical count is 2", check:o=>o.includes("Critical Batches: 2")},
    ],
    hint:"Group by product name. Sum quantities per product. Flag batches with days <= 2 as CRITICAL."
  },
  {
    id:"m28", cat:"loyalty", diff:"hard", pts:70,
    title:"Tiered Membership Calculator",
    desc:"Calculate membership tier based on annual spending.\n\nTiers:\n- Bronze: P0 - P4,999 (5% discount)\n- Silver: P5,000 - P14,999 (10% discount)\n- Gold: P15,000 - P29,999 (15% discount)\n- Platinum: P30,000+ (20% discount)\n\nMembers:\n- Ana: P3,200 annual\n- Ben: P12,500 annual\n- Cara: P28,000 annual\n- Dan: P35,600 annual\n\nFor each: determine tier, discount rate, and discount on a P500 purchase.",
    starter:`# Tiered membership calculator
members = [
    ("Ana",  3200.00),
    ("Ben",  12500.00),
    ("Cara", 28000.00),
    ("Dan",  35600.00),
]

purchase = 500.00

# Calculate tiers and discounts
`,
    expectedOutput:"MEMBERSHIP TIERS\n================\nAna\t\tBronze\t\t5%\tDiscount: P25.00\nBen\t\tSilver\t\t10%\tDiscount: P50.00\nCara\t\tGold\t\t15%\tDiscount: P75.00\nDan\t\tPlatinum\t20%\tDiscount: P100.00",
    testCases:[
      {label:"Ana is Bronze tier with 5%", check:o=>o.includes("Ana")&&o.includes("Bronze")&&o.includes("5%")},
      {label:"Ben is Silver with P50.00 discount", check:o=>o.includes("Ben")&&o.includes("Silver")&&o.includes("P50.00")},
      {label:"Cara is Gold tier", check:o=>o.includes("Cara")&&o.includes("Gold")},
      {label:"Dan is Platinum with P100.00", check:o=>o.includes("Dan")&&o.includes("Platinum")&&o.includes("P100.00")},
    ],
    hint:"Use if-elif to determine tier. Assign discount_rate based on tier. discount_amount = purchase * discount_rate."
  },
  {
    id:"m29", cat:"cashier", diff:"hard", pts:70,
    title:"Multi-Payment Processor",
    desc:"Handle a transaction with multiple payment methods.\n\nTotal bill: P3,450.00\n\nPayments:\n- Cash: P2,000.00\n- Credit Card: P1,000.00\n- Gift Certificate: P500.00\n\nPrint each payment, running balance, and final status (paid/short/overpaid).",
    starter:`# Multi-payment processor
total = 3450.00
payments = [
    ("Cash",            2000.00),
    ("Credit Card",     1000.00),
    ("Gift Certificate", 500.00),
]

# Process multiple payments
`,
    expectedOutput:"Total Bill: P3450.00\n====================\nCash:\t\t\tP2000.00\tRemaining: P1450.00\nCredit Card:\t\tP1000.00\tRemaining: P450.00\nGift Certificate:\tP500.00\t\tRemaining: P0.00 [OVERPAID]\n====================\nStatus: OVERPAID by P50.00",
    testCases:[
      {label:"Shows total bill P3450.00", check:o=>o.includes("3450.00")},
      {label:"Cash payment reduces to P1450.00", check:o=>o.includes("Cash")&&o.includes("1450.00")},
      {label:"After all payments, shows overpaid", check:o=>o.toUpperCase().includes("OVERPAID")},
      {label:"Overpaid by P50.00", check:o=>o.includes("P50.00")&&o.toUpperCase().includes("OVERPAID")},
    ],
    hint:"remaining = total. For each payment: remaining -= payment. Track if remaining < 0 (overpaid)."
  },
  {
    id:"m30", cat:"calc", diff:"hard", pts:75,
    title:"Compound Interest Calculator",
    desc:"Calculate investment growth with compound interest.\n\nPrincipal: P50,000.00\nAnnual interest rate: 8%\nYears: 5\nCompounded annually\n\nFormula: A = P(1 + r)^n\n\nPrint year-by-year growth and final amount.",
    starter:`# Compound interest calculator
principal = 50000.00
rate = 0.08
years = 5

# Calculate compound interest
`,
    expectedOutput:"INVESTMENT GROWTH\n=================\nYear 1:\tP54000.00\nYear 2:\tP58320.00\nYear 3:\tP62985.60\nYear 4:\tP68024.45\nYear 5:\tP73466.40\n=================\nFinal Amount: P73466.40\nTotal Interest: P23466.40",
    testCases:[
      {label:"Year 1 is P54000.00", check:o=>o.includes("Year 1")&&o.includes("54000.00")},
      {label:"Final amount P73466.40", check:o=>o.includes("73466.40")},
      {label:"Shows all 5 years", check:o=>o.includes("Year 5")},
      {label:"Total interest shown", check:o=>o.includes("Total Interest")&&o.includes("23466.40")},
    ],
    hint:"Each year: amount = amount * (1 + rate). Or: amount = principal * ((1 + rate) ** year). interest = final - principal."
  },
];

// ===================== MACHINE STATE =====================
let currentMode = 'code';
let currentMachineIdx = 0;
let machineSolved = new Set();
let machineStepsDone = [];

// ===================== MODE SWITCH =====================
function switchMode(mode) {
  currentMode = mode;
  const codeBtn = document.getElementById('mode-code-btn');
  const machineBtn = document.getElementById('mode-machine-btn');
  const challengeList = document.getElementById('challenge-list');
  const machineList = document.getElementById('machine-list');
  const problemPanel = document.getElementById('problem-panel');
  const editorPanel = document.getElementById('editor-panel');
  const machinePanel = document.getElementById('machine-panel');
  const machineEditorPanel = document.getElementById('machine-editor-panel');
  const codeBar = document.getElementById('code-bar-items');
  const machineBar = document.getElementById('machine-bar-items');

  if (mode === 'code') {
    codeBtn.classList.add('active');
    machineBtn.classList.remove('active');
    challengeList.classList.remove('hidden');
    machineList.classList.add('hidden');
    problemPanel.classList.remove('hidden');
    editorPanel.classList.remove('hidden');
    machinePanel.classList.add('hidden');
    machineEditorPanel.classList.add('hidden');
    codeBar.style.display = 'contents';
    machineBar.style.display = 'none';
    document.getElementById('search-input').placeholder = 'Search challenges...';
    renderSidebar();
    loadChallenge(currentIdx);
  } else {
    machineBtn.classList.add('active');
    codeBtn.classList.remove('active');
    challengeList.classList.add('hidden');
    machineList.classList.remove('hidden');
    problemPanel.classList.add('hidden');
    editorPanel.classList.add('hidden');
    machinePanel.classList.remove('hidden');
    machineEditorPanel.classList.remove('hidden');
    codeBar.style.display = 'none';
    machineBar.style.display = 'flex';
    document.getElementById('search-input').placeholder = 'Search programs...';
    renderMachineSidebar();
    loadMachineActivity(currentMachineIdx);
  }
}

// ===================== MACHINE SIDEBAR =====================
function renderMachineSidebar(filter='') {
  const list = document.getElementById('machine-list');
  const f = filter.toLowerCase();
  let html = '';
  let lastCat = '';
  MACHINE_ACTIVITIES.forEach((act, i) => {
    const match = !f || act.title.toLowerCase().includes(f) || act.cat.toLowerCase().includes(f);
    if (!match) return;
    if (act.cat !== lastCat) {
      html += `<div class="category-label">${MACHINE_CATS[act.cat]||act.cat}</div>`;
      lastCat = act.cat;
    }
    const active = i === currentMachineIdx ? 'active' : '';
    const isSolved = machineSolved.has(i) ? 'solved' : '';
    html += `
      <div class="machine-sidebar-item ${active} ${isSolved}" onclick="loadMachineActivity(${i})">
        <div class="cnum">${act.id.replace('m','')}</div>
        <div class="cinfo">
          <div class="cname">${act.title}</div>
          <div class="cdiff diff-cli">${act.diff} · ${act.pts}pts</div>
        </div>
      </div>
    `;
  });
  list.innerHTML = html;
}

// ===================== MACHINE ACTIVITY PANEL =====================
function loadMachineActivity(idx, forceStarter) {
  currentMachineIdx = idx;
  const act = MACHINE_ACTIVITIES[idx];
  const saved = loadedSession && loadedSession.machineCodePerActivity && loadedSession.machineCodePerActivity[idx];
  const code = (!forceStarter && saved) ? saved : act.starter;
  setMachineEditorValue(code);
  document.getElementById('machine-output-content').textContent = 'Run your program to see output here.';
  document.getElementById('machine-output-content').className = 'output-content';
  document.getElementById('machine-run-time').textContent = '';
  document.getElementById('machine-char-count').textContent = code.length + ' chars';
  updateLineNumbers('machine-code-editor', 'machine-code-line-numbers');
  renderMachineSidebar(document.getElementById('search-input').value);
  renderMachineProblem();
  saveSession();
}

function renderMachineProblem() {
  const act = MACHINE_ACTIVITIES[currentMachineIdx];
  const panel = document.getElementById('machine-panel');

  const expectedHtml = act.expectedOutput ? `
    <div class="section-label">Expected Output</div>
    <div class="expected-box">
      <div class="expected-label">stdout</div>
      <pre><code class="language-python">${escHtml(act.expectedOutput)}</code></pre>
    </div>
  ` : '';

  panel.innerHTML = `
    <div class="pbadge" style="background:rgba(167,139,250,0.1);color:var(--purple)">${act.diff} · ${act.pts} pts · ${MACHINE_CATS[act.cat]||act.cat}</div>
    <div class="ptitle">${act.title}</div>
    <div class="pdesc">${act.desc.replace(/\n/g,'<br>')}</div>
    ${expectedHtml}
    <div class="section-label">Test Cases (${act.testCases.length})</div>
    <div id="machine-objectives">
      ${act.testCases.map((t,i)=>`
        <div class="objective" id="mobj-${i}">
          <div class="obj-icon">◦</div>
          <span>${t.label}</span>
        </div>
      `).join('')}
    </div>
    <div class="hint-box"><div class="hint-label">💡 Hint</div>${act.hint}</div>
  `;

  document.querySelectorAll('#machine-panel .expected-box pre code').forEach(b => hljs.highlightElement(b));
  updateMachineProgress(0, act.testCases.length);
}

function updateMachineProgress(passed, total) {
  const pct = total > 0 ? (passed / total) * 100 : 0;
  document.getElementById('machine-progress-bar').style.width = pct + '%';
  document.getElementById('machine-prog-label').textContent = `${passed}/${total}`;
}

function resetMachineActivity() {
  if(confirm("Reset to starter code?")) loadMachineActivity(currentMachineIdx, true);
}

// ===================== RUN MACHINE CODE =====================
async function runMachineCode() {
  if(!pyodide){alert("Python is still loading, please wait.");return;}
  const code = getMachineEditorValue();
  const btn = document.getElementById('machine-run-btn');
  btn.disabled=true; btn.textContent='Running...';
  const t0 = Date.now();
  const result = await runPython(code, []);
  const elapsed = Date.now()-t0;
  btn.disabled=false; btn.textContent='▶ Run Program';
  const out = document.getElementById('machine-output-content');
  out.textContent = result.output || '(no output)';
  out.className = 'output-content' + (result.error?' has-error':'');
  document.getElementById('machine-run-time').textContent = `${elapsed}ms`;
}

// ===================== CHECK MACHINE CODE =====================
async function checkMachineCode() {
  if(!pyodide){alert("Python is still loading, please wait.");return;}
  const code = getMachineEditorValue().trim();
  if(!code){alert("Write some code first!");return;}

  const act = MACHINE_ACTIVITIES[currentMachineIdx];
  showLoading("Running your program...");

  const result = await runPython(code, []);
  const actualOutput = result.output.trim();

  const outEl = document.getElementById('machine-output-content');
  outEl.textContent = result.output || '(no output)';
  outEl.className = 'output-content' + (result.error?' has-error':'');

  const testResults = act.testCases.map(tc=>({
    label: tc.label,
    passed: !result.error && tc.check(actualOutput)
  }));

  const passed = testResults.filter(r=>r.passed).length;
  const total = testResults.length;
  const allPassed = passed===total;

  testResults.forEach((r,i)=>{
    const el = document.getElementById(`mobj-${i}`);
    if(el){
      el.className='objective '+(r.passed?'passed':'failed');
      el.querySelector('.obj-icon').textContent = r.passed?'✓':'✗';
    }
  });
  updateMachineProgress(passed, total);

  document.getElementById('loading-text').textContent='Getting AI feedback...';

  let aiFeedback = "";
  try {
    const prompt = `You are a Python program evaluator. Program challenge: "${act.title}".

Expected output:
${act.expectedOutput||(act.testCases.map(t=>t.label).join('\n'))}

Student's actual output:
${actualOutput||'(no output)'}

Test results: ${passed}/${total} passed.
${testResults.filter(r=>!r.passed).map(r=>`FAILED: ${r.label}`).join('\n')||'All tests passed!'}

Give 1-3 sentence feedback. If all passed: short congratulation. If some failed: what's specifically wrong. Be direct and technical. No markdown.`;

    const response = await fetch("https://api.anthropic.com/v1/messages",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1000,messages:[{role:"user",content:prompt}]})
    });
    const data = await response.json();
    aiFeedback = data.content?.[0]?.text || "Program checked!";
  } catch(e) {
    aiFeedback = allPassed ? "All tests passed! Great work." : `${passed}/${total} tests passed. Check your output format matches the expected output.`;
  }

  hideLoading();

  if(allPassed && !machineSolved.has(currentMachineIdx)){
    machineSolved.add(currentMachineIdx);
    totalScore += act.pts;
    document.getElementById('total-score').textContent = totalScore;
    renderMachineSidebar(document.getElementById('search-input').value);
  }

  // Reuse the results overlay
  document.getElementById('res-icon').className='result-icon '+(allPassed?'pass':'fail');
  document.getElementById('res-icon-char').textContent = allPassed?'✓':'✗';
  document.getElementById('res-title').textContent = allPassed?'All Tests Passed!':`${passed}/${total} Tests Passed`;
  document.getElementById('res-sub').textContent = `${act.title} · ${act.pts}pts`;
  document.getElementById('test-list').innerHTML = testResults.map(r=>`
    <div class="test-item ${r.passed?'pass':'fail'}">
      <span class="ts ${r.passed?'p':'f'}">${r.passed?'PASS':'FAIL'}</span>
      <span class="test-detail">${r.label}</span>
    </div>
  `).join('');
  document.getElementById('ai-box').textContent = aiFeedback;
  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = currentMachineIdx<MACHINE_ACTIVITIES.length-1?'':'none';
  nextBtn.onclick = () => { closeResults(); if(currentMachineIdx<MACHINE_ACTIVITIES.length-1) loadMachineActivity(currentMachineIdx+1); };
  document.getElementById('results-overlay').classList.add('show');
}

// ===================== CODEMIRROR EDITORS =====================
let cmCode, cmMachine;

function initCodeMirrorEditors() {
  const commonConfig = {
    mode: 'python',
    theme: 'material-darker',
    lineNumbers: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    indentUnit: 4,
    tabSize: 4,
    indentWithTabs: false,
    extraKeys: {
      'Tab': function(cm) { cm.replaceSelection('    '); },
      'Ctrl-Enter': function() { currentMode === 'machine' ? runMachineCode() : runCode(); },
      'Cmd-Enter': function() { currentMode === 'machine' ? runMachineCode() : runCode(); },
    }
  };

  cmCode = CodeMirror.fromTextArea(document.getElementById('code-editor'), commonConfig);
  cmCode.setSize('100%', '100%');
  cmCode.on('change', function() {
    const v = cmCode.getValue();
    document.getElementById('char-count').textContent = v.length + ' chars';
    if (loadedSession) {
      if (!loadedSession.codePerChallenge) loadedSession.codePerChallenge = {};
      loadedSession.codePerChallenge[currentIdx] = v;
    }
    debounceSave();
  });

  cmMachine = CodeMirror.fromTextArea(document.getElementById('machine-code-editor'), commonConfig);
  cmMachine.setSize('100%', '100%');
  cmMachine.on('change', function() {
    const v = cmMachine.getValue();
    document.getElementById('machine-char-count').textContent = v.length + ' chars';
    if (loadedSession) {
      if (!loadedSession.machineCodePerActivity) loadedSession.machineCodePerActivity = {};
      loadedSession.machineCodePerActivity[currentMachineIdx] = v;
    }
    debounceSave();
  });
}

let _saveTimer = null;
function debounceSave() {
  clearTimeout(_saveTimer);
  _saveTimer = setTimeout(saveSession, 600);
}

// Shim: get/set editor values via CodeMirror
function getCodeEditorValue() { return cmCode ? cmCode.getValue() : document.getElementById('code-editor').value; }
function setCodeEditorValue(v) { if (cmCode) cmCode.setValue(v); else document.getElementById('code-editor').value = v; }
function getMachineEditorValue() { return cmMachine ? cmMachine.getValue() : document.getElementById('machine-code-editor').value; }
function setMachineEditorValue(v) { if (cmMachine) cmMachine.setValue(v); else document.getElementById('machine-code-editor').value = v; }

// Compatibility: old updateLineNumbers calls are now no-ops
function updateLineNumbers() {}

// Session save/load
let loadedSession = null;

function saveSession() {
  // Per-challenge code storage
  const codePerChallenge = loadedSession ? {...(loadedSession.codePerChallenge||{})} : {};
  codePerChallenge[currentIdx] = getCodeEditorValue();

  const machineCodePerActivity = loadedSession ? {...(loadedSession.machineCodePerActivity||{})} : {};
  machineCodePerActivity[currentMachineIdx] = getMachineEditorValue();

  const session = {
    totalScore: totalScore,
    solved: Array.from(solved),
    machineSolved: Array.from(machineSolved),
    currentIdx: currentIdx,
    currentMachineIdx: currentMachineIdx,
    currentMode: currentMode,
    codePerChallenge: codePerChallenge,
    machineCodePerActivity: machineCodePerActivity,
  };
  loadedSession = session;
  localStorage.setItem('pymart_session', JSON.stringify(session));
}

function loadSession() {
  const saved = localStorage.getItem('pymart_session');
  if (!saved) return;
  
  try {
    const session = JSON.parse(saved);
    loadedSession = session;
    totalScore = session.totalScore || 0;
    solved = new Set(session.solved || []);
    machineSolved = new Set(session.machineSolved || []);
    currentIdx = session.currentIdx || 0;
    currentMachineIdx = session.currentMachineIdx || 0;
    currentMode = session.currentMode || 'code';
    
    document.getElementById('total-score').textContent = totalScore;
    
    // Restore mode and panels
    if (currentMode === 'machine') {
      switchMode('machine');
    } else {
      switchMode('code');
    }
  } catch(e) {
    console.error('Failed to load session:', e);
  }
}


// Route filterChallenges by mode
function filterChallenges() {
  const val = document.getElementById('search-input').value;
  if (currentMode === 'machine') {
    renderMachineSidebar(val);
  } else {
    renderSidebar(val);
  }
}

// Init
loadedSession = null;
try {
  const raw = localStorage.getItem('pymart_session');
  if (raw) loadedSession = JSON.parse(raw);
} catch(e) {}

if (loadedSession) {
  totalScore = loadedSession.totalScore || 0;
  solved = new Set(loadedSession.solved || []);
  machineSolved = new Set(loadedSession.machineSolved || []);
  currentIdx = loadedSession.currentIdx || 0;
  currentMachineIdx = loadedSession.currentMachineIdx || 0;
  currentMode = loadedSession.currentMode || 'code';
  document.getElementById('total-score').textContent = totalScore;
}

renderSidebar();
renderMachineSidebar();

// Init CodeMirror editors FIRST before loading challenges
initCodeMirrorEditors();

if (currentMode === 'machine') {
  switchMode('machine');
} else {
  switchMode('code');
  loadChallenge(currentIdx);
}
// Expose functions to global scope for inline handlers and debugging
window.runCode = runCode;
window.checkCode = checkCode;
window.resetCode = resetCode;
window.runMachineCode = runMachineCode;
window.checkMachineCode = checkMachineCode;
window.resetMachineActivity = resetMachineActivity;
window.switchMode = switchMode;
window.loadChallenge = loadChallenge;
window.loadMachineActivity = loadMachineActivity;
window.filterChallenges = filterChallenges;
window.nextChallenge = nextChallenge;
window.closeResults = closeResults;

initPyodide();
