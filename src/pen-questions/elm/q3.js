class UnionFind {
    constructor(size) {
        this.root = Array.from({length: size + 1}, (_, index) => index);
        this.rank = Array(size + 1).fill(1);
    }

    find(x) {
        if (x === this.root[x]) {
            return x;
        }
        return this.root[x] = this.find(this.root[x]);
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.root[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.root[rootX] = rootY;
            } else {
                this.root[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}

function maxEdgeValue(n, m, edges) {
    if (m === 0 && n >= 3) {
        return -1;
    }

    edges.sort((a, b) => b[2] - a[2]); // Sort edges by weight in descending order

    const uf = new UnionFind(n);
    let maxTreeValue = 0;
    let edgesUsed = 0;
    let minValue = Infinity;
    let totalWeight = 0;

    // Calculating the total weight of all edges
    for (const [u, v, w] of edges) {
        totalWeight += w;
    }

    for (const [u, v, w] of edges) {
        if (uf.find(u) !== uf.find(v)) {
            uf.union(u, v);
            maxTreeValue += w;
            edgesUsed++;
            minValue = Math.min(minValue, w);
            if (edgesUsed === n - 1) break;
        }
    }

    if (edgesUsed < n - 1) {
        return -1; // If we can't connect all nodes, return -1
    }

    if (edgesUsed === n - 1) {
        return 0; // If we used exactly n-1 edges, then we can't safely remove any
    }

    return totalWeight - maxTreeValue;
}

// Example usage:
// const n = 3, m = 3;
// const edges = [[1, 2, 4], [2, 3, 3], [1, 3, 2]];
const n = 4, m = 2;
const edges = [[1, 2, 4], [3, 4, 3]];

console.log(maxEdgeValue(n, m, edges));  // Output should be 7 based on the example given
