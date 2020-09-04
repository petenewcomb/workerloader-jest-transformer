import BaseWorker from '../baseworker';


class FakeWorker extends BaseWorker {
  main(addEventListener, removeEventListener, dispatchEvent, postMessage, terminate) {
    const onmessage = e => { postMessage(e.data*2) }
    return onmessage
  }
}

const sleep = t => new Promise( r => { setTimeout(r, t); });


describe('BaseWorker class', () => {
  describe('execution', () => {
    it('instantiate a BaseWorker', async() => {
      const worker = new FakeWorker()
      worker.onmessage = jest.fn();
      worker.postMessage(5);
      await sleep(10);
      expect(worker.onmessage).toHaveBeenCalledWith({ data: 10 });
    });
    it('terminate a worker', async() => {
      const worker = new FakeWorker()
    });
  });
});