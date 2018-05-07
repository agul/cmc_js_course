class Edge {
  constructor(edge) {
    this.from = edge[0];
    this.to = edge[1];
    if (edge.length > 2) {
      this.weight = edge[2];
    } else {
      this.weight = 1;
    }
  }
}

class Graph {
  constructor(vertices_count, edges) {
    this.vertices_count = vertices_count;
    this.g = [];
    for (var i = 0; i < vertices_count; ++i) {
      this.g.push([]);
    }
    for (var i in edges) {
      const edge = new Edge(edges[i]);
      const reverse_edge = new Edge([edges[i][1], edges[i][0], edges[i][2]])
      this.g[edge.from].push(edge);
      this.g[edge.to].push(reverse_edge);
    }
  }

  dfs() {
    this.visited = new Set();
    this.order = [];
    for (var i = 0; i < this.vertices_count; ++i) {
      if (!this.visited.has(i)) {
        this._dfs(i);
      }
    }
    console.log(this.order) 
  }

  _dfs(vertex) {
    this.order.push(vertex);
    this.visited.add(vertex);
    for (var i in this.g[vertex]) {
      const edge = this.g[vertex][i];
      const to = edge.to;
      if (!this.visited.has(to)) {
        this._dfs(to);
      }
    }
  }

  bfs() {
    this.visited = new Set()
    this.order = []
    for (var i = 0; i < this.vertices_count; ++i) {
      if (!this.visited.has(i)) {
        this._bfs(i)
      }
    }
    console.log(this.order);
  }

  _bfs(start) {
    var queue = [start];
    this.visited.add(start);
    var head = 0;
    while (head < queue.length) {
      const vertex = queue[head];
      this.order.push(vertex);
      ++head;
      for (var i in this.g[vertex]) {
        const edge = this.g[vertex][i];
        const to = edge.to;
        if (!this.visited.has(to)) {
          queue.push(to);
          this.visited.add(to);
        }
      }
    }
  }

  shortest_path(start, end) {
    var dist = [];
    var visited = [];
    const kInf = Math.pow(10, 9);
    for (var i = 0; i < this.vertices_count; ++i) {
      dist.push(kInf);
      visited.push(false);
    }
    dist[start] = 0;
    for (var i = 0; i < this.vertices_count; ++i) {
      var best = kInf;
      var vertex = -1;
      for (var j = 0; j < this.vertices_count; ++j) {
        if (!visited[j] && dist[j] < best) {
          best = dist[j];
          vertex = j;
        }
      }
      if (vertex == -1) {
        break;
      }

      visited[vertex] = true;
      for (var k in this.g[vertex]) {
        const edge = this.g[vertex][k];
        const to = edge.to;
        const len = edge.weight;
        dist[to] = Math.min(dist[to], dist[vertex] + len);
      }
    }
    if (dist[end] == kInf) {
      console.log("Vertices " + start + " and " + end + " are not connected.");
      return false;
    }
    console.log("Shortest path length = " + dist[end]);
    var path = [end];
    var cur_vertex = end;
    while (cur_vertex != start) {
      for (var k = 0; k < this.g[cur_vertex].length; ++k) {
        const edge = this.g[cur_vertex][k];
        const to = edge.to;
        const len = edge.weight;
        if (dist[to] == dist[cur_vertex] - len) {
          cur_vertex = to;
          path.push(to);
        }
      }
    }
    path = path.reverse();
    console.log(path);
  }

}


const graph = new Graph(4, [
    [0, 1, 1],
    [1, 2, 4],
    [1, 3, 1],
    [0, 2, 4],
    [3, 2, 1]
]);

const graph2 = new Graph(4, [
    [0, 1, 1],
    [1, 3, 1],
    [3, 2, 1]
]);

const graph3 = new Graph(7, [
    [0, 1, 2],
    [1, 2, 2],
    [1, 3, 4],
    [0, 3, 3],
    [0, 4, 1],
    [3, 4, 1],
    [4, 6, 90],
    [5, 6, 2],
    [3, 5, 2]
]);

graph.dfs()
graph2.bfs()
graph.shortest_path(0, 3);
graph3.shortest_path(0, 6);