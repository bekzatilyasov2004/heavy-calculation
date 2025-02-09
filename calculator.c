#include <stdint.h>
#include <emscripten.h>

uint64_t factorial(int n) {
    uint64_t result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

uint64_t fibonacci(int n) {
    if (n <= 1) return n;
    uint64_t a = 0, b = 1, temp;
    for (int i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

#ifdef __cplusplus
extern "C" {
#endif

EMSCRIPTEN_KEEPALIVE uint64_t wasm_factorial(int n) {
    return factorial(n);
}

EMSCRIPTEN_KEEPALIVE uint64_t wasm_fibonacci(int n) {
    return fibonacci(n);
}

#ifdef __cplusplus
}
#endif
